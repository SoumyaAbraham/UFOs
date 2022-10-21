// import data from data.js
const tableData = data;

// reference the HTML table as d3
var tbody = d3.select("tbody");

// building a table
function buildTable(data){
    // clear out data
    tbody.html("");    

//loop thorugh each object
//append a row and cell for each value
data.forEach((dataRow)=> {
      // append new row to table
    let row = tbody.append("tr");

    // loop though each field in the dataRow and 
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      
        let cell = row.append("td");
        cell.text(val);
    });
});
}

function handleClick(){
 let date = d3.select("#datetime").property("value");   
// set default filter to original table
let filteredData = tableData;
// filter by date:
if (date){
    filteredData= filteredData.filter(row =>row.datetime === date);
}

// Rebuild the table using the filtered data
// If no date was entered, the data table remains the original 

buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildHandle(tableData);