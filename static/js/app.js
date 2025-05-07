// Function to build the Demographic Info Panel
function buildMetadata(sample) {
  // Fetch the JSON data
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then(data => {
    // Get the metadata array
    let metadata = data.metadata;
    // Filter the array for the object with the desired sample number (convert sample to number)
    let resultArray = metadata.filter(meta => meta.id === parseInt(sample));
    let result = resultArray[0];

    // Select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");
    // Clear any existing metadata
    panel.html("");

    // Loop through each key-value pair in the metadata object and append it to the panel
    Object.entries(result).forEach(([key, value]) => {
      panel.append("p").text(`${key}: ${value}`);
    });
  });
}

// Function to build the Charts
function buildCharts(sample) {
  // Fetch the JSON data
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then(data => {
    // Get the samples array
    let samples = data.samples;
    // Filter the samples for the object with the desired sample number
    let resultArray = samples.filter(sampleObj => sampleObj.id === sample);
    let result = resultArray[0];

    // Get the otu_ids, otu_labels, and sample_values arrays
    let otu_ids = result.otu_ids;
    let otu_labels = result.otu_labels;
    let sample_values = result.sample_values;

    // Build the Bubble Chart
    let bubbleData = [
      {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: 'markers',
        marker: {
          size: sample_values,
          color: otu_ids,
          colorscale: "Earth"
        }
      }
    ];

    let bubbleLayout = {
      title: 'Bacteria Cultures Per Sample',
      xaxis: { title: "OTU ID" },
      hovermode: "closest"
    };

    Plotly.newPlot('bubble', bubbleData, bubbleLayout);

    // Build the Horizontal Bar Chart
    // Slice the top 10 values and then reverse them for the bar chart order
    let yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
    let barData = [
      {
        y: yticks,
        x: sample_values.slice(0, 10).reverse(),
        text: otu_labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h"
      }
    ];

    let barLayout = {
      title: 'Top 10 OTUs Found',
      margin: { t: 30, l: 150 }
    };

    Plotly.newPlot("bar", barData, barLayout);
  });
}

// Function to initialize the dashboard
function init() {
  // Fetch the JSON data
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then(data => {
    // Get the list of sample names
    let names = data.names;
    // Select the dropdown element
    let selector = d3.select("#selDataset");

    // Populate the dropdown with sample names
    names.forEach(sample => {
      selector.append("option").text(sample).property("value", sample);
    });

    // Use the first sample to build the initial plots and metadata
    let firstSample = names[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Function for when a new sample is selected
function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected and update the charts and metadata
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
