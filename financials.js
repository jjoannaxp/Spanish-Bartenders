let ctx = document.getElementById("myChart").getContext("2d");

var chartData = {
  labels: ["2024", "2025", "2026"],
  datasets: [
    {
      label: "Revenue",
      data: [108000, 129600, 168480],
    },
    {
      label: "Gross Profit",
      data: [75500, 90720, 117836],
    },
    {
      label: "Operating Profit",
      data: [61925.26, 74430.32, 96759.41],
    },
  ],
};

var myChart = new Chart(ctx, {
  type: "bar",
  data: chartData,
});


// Get the slider element and chart instance
var slider = document.getElementById("timeframe-slider");
var chart = myChart;

// Add an event listener to the slider
slider.addEventListener("input", function () {
  // Get the slider value
  var timeframe = this.value;

  // Update the chartData object with the new timeframe
  chartData.labels = getProjectedLabels(timeframe);
  chartData.datasets.forEach(function (dataset) {
    dataset.data = getProjectedData(dataset.label, timeframe);
  });

  // Update the chart with the new data
  chart.update();
});

// Helper function to generate projected labels based on timeframe
function getProjectedLabels(timeframe) {
  var labels = [];
  for (var i = 0; i < timeframe; i++) {
    labels.push("Year " + (i + 1));
  }
  return labels;
}

// Helper function to generate projected data based on label and timeframe
function getProjectedData(label, timeframe) {
  var data = [];
  var initialData = chartData.datasets.find(function (dataset) {
    return dataset.label === label;
  }).data;
  var growthRate = 1.1; // Example growth rate
  for (var i = 0; i < timeframe; i++) {
    data.push(initialData[initialData.length - 1] * Math.pow(growthRate, i + 1));
  }
  return data;
}