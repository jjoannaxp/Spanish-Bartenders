function loadJimbo(containerId, fbxName, animationIndex, sliderId, initialPose, scale, pos) {
  const container = document.getElementById(containerId);
  let currentObject;
  let currentMixer;
  let currentAction;
  let animationRunning = false;

  // Purge the container
  while (container.firstChild) {
    container.firstChild.remove();
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 10;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const loader = new THREE.FBXLoader();
  // make background transparent  
  renderer.setClearColor(0x000000, 0);

  // add light to the scene
  const light = new THREE.AmbientLight(0x404040);
  light.intensity = 5;
  scene.add(light);

  function loadFBX(scene, fbxName) {
    loader.load(`${fbxName}.fbx`, function (object) {
      if (currentObject) {
        scene.remove(currentObject);
        if (currentMixer) {
          currentMixer.stopAllAction(); 
        }
      }

      object.scale.set(scale,scale,scale);
      object.position.set(0, pos, 0);

      const mixer = new THREE.AnimationMixer(object);
      const action = mixer.clipAction(object.animations[0]);
      action.play();
      action.paused = true;
      mixer.setTime(initialPose*action.getClip().duration);

      scene.add(object); 
      currentObject = object;
      currentMixer = mixer;
      currentAction = action;
      renderer.render(scene, camera); // render a silhouette of the model
    });
  }

  const clock = new THREE.Clock();
  clock.stop();

  // animation function
  function animateBilly() {
    if (!animationRunning) {
      return;
    }

    const delta = clock.getDelta();
    if (currentMixer) {
      currentMixer.update(delta);
    }
    renderer.render(scene, camera);
    requestAnimationFrame(animateBilly);
  }

  const parentDiv = container.parentElement;

  parentDiv.addEventListener("mouseover", function () { // start animation when mouse is over the container
    animationRunning = true;
    if (currentAction) {
      currentAction.paused = false;
    }
    clock.start();
    animateBilly();
  });

//   listen for page size change and adjust to fit the container with jquery
    $(window).resize(function () {
        renderer.setSize(container.clientWidth, container.clientHeight);
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        // render
        renderer.render(scene, camera);
    });
  parentDiv.addEventListener("mouseout", function () { // pause animation when mouse is not over the container
    animationRunning = false;
    if (currentAction) {
      currentAction.paused = true;
    }
    clock.stop();
  });

  loadFBX(scene, `${fbxName}_${animationIndex}`);

  container.onclick = function () {
    animationIndex = (animationIndex % 4) + 1; // 4 is the number of animations
    loadFBX(scene, `${fbxName}_${animationIndex}`); // load the next animation
  };

  const slider = document.getElementById(sliderId);
  slider.addEventListener("input", function (event) {
    const rotation = (event.target.value * Math.PI) / 180; // convert to radians
    scene.rotation.y = rotation;
  });
}
// loadJimbo("your_container_id", "path_to_fbx_file", 1, "your_slider_id", initial_pose_starting_frame);