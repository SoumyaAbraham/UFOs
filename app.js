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
      // append to table
    let row = tbody.append("tr");

    // loop though each field in the dataRow and 
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      
        let cell = row.append("td");
        cell.text(val);
    });
});
}