# Belly Button Biodiversity Dashboard

The Belly Button Biodiversity Dashboard is an interactive web app that allows users to explore the fascinating world of microbial diversity from human navels. This project leverages the Belly Button Biodiversity dataset, which catalogs microbial species (OTUs) from human subjects, to create engaging visualizations.

## Project Overview

- **Interactive Dropdown:**  
  A dynamic dropdown menu enables users to select individual test subjects by their ID. Changing the selection updates the displayed data across all visualizations.

- **Demographic Information Panel:**  
  For each selected test subject, the dashboard displays detailed demographic information such as age, ethnicity, gender, location, and washing frequency.

- **Horizontal Bar Chart:**  
  This chart displays the top 10 OTUs (operational taxonomic units) found in the sample, depicted with:
  - **bar lengths:** representing the sample values.
  - **labels:** showing the OTU IDs.
  - **hovertext:** displaying additional descriptive details about each OTU.

- **Bubble Chart:**  
  An interactive bubble chart visualizes every bacterial sample from the selected individual:
  - **X-Axis:** Displays OTU IDs.
  - **Y-Axis:** Represents sample values.
  - **Marker Sizes:** Scaled based on sample values.
  - **Marker Colors:** Determined by OTU IDs.
  - **Tooltips:** Hovering over a bubble reveals the corresponding OTU labels.

## Files & Structure

- **index.html:**  
  Contains the foundational structure of the dashboard, including the layout and placeholders for metadata and charts.

- **static/js/app.js:**  
  Houses the JavaScript code, which uses D3.js to fetch and process JSON data and Plotly.js to create responsive and interactive visualizations.

- **samples.json:**  
  Provided primarily for reference, this JSON file contains the Belly Button Biodiversity dataset with sample data, metadata, and OTU details.

- **Additional Files:**  
  Other files (such as `.gitkeep`) are included to maintain proper folder structure in the repository.

## Technologies Used

- **D3.js:** For data fetching and manipulation.
- **Plotly.js:** For building interactive and dynamic charts.
- **Bootstrap:** For responsive styling and layout.

## Project Highlights

- **Dynamic Data Interaction:**  
  The dashboard automatically updates both demographic information and visualizations when a new sample is selected from the dropdown.

- **Disclaimer:***  
  Code is my own, I did use MS Copilot to troubleshoot and fix some issues I was having, it suggested some corrections which were accepted. 

- **Live Deployment:**  
  This project is deployed on GitHub Pages, offering a live demonstration of the interactive dashboard.
