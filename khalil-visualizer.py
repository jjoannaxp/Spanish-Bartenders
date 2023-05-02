import pygame
import pyaudio
import numpy as np
from scipy import signal
from PIL import Image

# Define the audio parameters
CHUNK_SIZE = 1024
FORMAT = pyaudio.paFloat32
CHANNELS = 1
RATE = 44100

# Initialize Pygame
pygame.init()

# Display settings
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
SCREEN = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Audio Visualizer")

# Load the image
img = Image.open("khalil.png")
img_width, img_height = img.size

# Define the zoom speed and factor
ZOOM_SPEED = 0.1
ZOOM_FACTOR = 1.0

# Initialize PyAudio
pa = pyaudio.PyAudio()
# get input device for "Audio Loopback"
loopback_index = None
for i in range(pa.get_device_count()):
    dev = pa.get_device_info_by_index(i)
    if dev['name'] == "Audio Loopback":
        loopback_index = i
        break
# Open the audio stream with loopback device
stream = pa.open(format=FORMAT, channels=CHANNELS, rate=RATE, input=True, input_device_index=loopback_index, frames_per_buffer=CHUNK_SIZE)

# Start the Pygame clock
clock = pygame.time.Clock()

running = True
ema_amplitude = 0
alpha = 0.3  # Smoothing factor for EMA (between 0 and 1)
while running:
    # Check for quit event
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
            break

    # Read audio from stream
    audio_data = stream.read(CHUNK_SIZE, exception_on_overflow=False)
    audio_array = np.frombuffer(audio_data, dtype=np.float32)

    # Apply a low-pass filter to remove high frequency noise
    b, a = signal.butter(4, 0.01, 'low')
    audio_array = signal.filtfilt(b, a, audio_array)

    # Calculate the average amplitude of the audio data
    amplitude = np.abs(audio_array).mean()

    # Calculate the exponential moving average of the amplitude
    ema_amplitude = alpha * amplitude + (1 - alpha) * ema_amplitude

    # Zoom the image based on the smoothed amplitude
    ZOOM_FACTOR = 1.0 + ema_amplitude * 10.0
    if ZOOM_FACTOR > 10.0:
        ZOOM_FACTOR = 10.0

    # Scale the image to fit within the screen while maintaining aspect ratio
    max_width = int(SCREEN_WIDTH * 0.8)
    max_height = int(SCREEN_HEIGHT * 0.8)
    scale_factor = min(max_width / img_width, max_height / img_height)

    # Apply the zoom factor
    scaled_width = int(img_width * ZOOM_FACTOR * scale_factor)
    scaled_height = int(img_height * ZOOM_FACTOR * scale_factor)
    scaled_img = img.resize((scaled_width, scaled_height))

    # Convert the PIL Image to a Pygame Surface
    pygame_img = pygame.image.fromstring(scaled_img.tobytes(), scaled_img.size, scaled_img.mode)

    # Clear the screen
    SCREEN.fill((0, 0, 0))

    # Blit the Pygame Surface onto the screen
    SCREEN.blit(pygame_img, ((SCREEN_WIDTH - scaled_width) // 2, (SCREEN_HEIGHT - scaled_height) // 2))

    # Update the display
    pygame.display.update()

    # Tick the clock
    clock.tick(60)

# Clean up
stream.stop_stream()
stream.close()
pa.terminate()
pygame.quit()