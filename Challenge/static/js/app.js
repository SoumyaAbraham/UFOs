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
};

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters(){

    // 4a. Save the element that was changed as a variable.
    var changedElement = d3.select(this);

    // 4b. Save the value that was changed as a variable. 
    var changedValue = changedElement.property("value");
    console.log(changedValue);

    // 4c. Save the id of the filter that was changed as a variable.
    var filteredID = changedElement.attr("id");
    console.log(filteredID);

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object. 

    if (changedValue) {
        filters[filteredID] = changedValue;
    }
    else{
        delete filters [filteredID];
    };


    // 6. Call function to apply all filters and rebuild the table
    filterTable();    
    };

    // 7. Use this function to filter the table when data is entered.
function filterTable() {

    // 8. Set the filtered data to the tableData.
    var filteredData = tableData;

    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key, val]) => {
        filteredData = filteredData.filter((row) => row[key] === val);

    });

    // 10. Finally, rebuild the table using the filtered data

    buildTable(filteredData);
};    

    // 2. Attach an event to listen for changes to each filter

    d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);