let ctx = document.getElementById("myChart").getContext("2d");

var chartData = {
  labels: ["2024", "2025", "2026"],
  datasets: [
    {
      label: "Revenue",
      data: [108000, 129600, 168480],
      backgroundColor: "#6D1E15",
    },
    {
      label: "Gross Profit",
      class: "grossprofit",
      data: [75500, 90720, 117836],
      backgroundColor: "#FFE491",
    },
    {
      label: "Operating Profit",
      class: "operatingprofit",
      data: [61925.26, 74430.32, 96759.41],
      backgroundColor: "#334B29",
    },
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false,
}
};

var myChart = new Chart(ctx, {
  type: "bar",
  data: chartData,
});


//get the slider element and chart instance
var slider = document.getElementById("timeframe-slider");
var chart = myChart;

//add an event listener to the slider
slider.addEventListener("input", function () {
  //get the slider value
  var timeframe = this.value;

  //update the chartData object with the new timeframe
  chartData.labels = getProjectedLabels(timeframe);
  chartData.datasets.forEach(function (dataset) {
    dataset.data = getProjectedData(dataset.label, timeframe);
  });

  // update the chart with the new data
  chart.update();
});

// helper function to generate projected labels based on timeframe
function getProjectedLabels(timeframe) {
  var labels = [];
  for (var i = 0; i < timeframe; i++) {
    labels.push("Year " + (i + 1));
  }
  return labels;
}

// helper function
function getProjectedData(label, timeframe) {
  var data = [];
  var initialData = chartData.datasets.find(function (dataset) {
    return dataset.label === label;
  }).data;
  var growthRate = 1.1; //10% growth rate
  for (var i = 0; i < timeframe; i++) {
    data.push(initialData[initialData.length - 1] * Math.pow(growthRate, i + 1));
  }
  return data;
}