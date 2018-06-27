// $(function() {
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // Your code goes here!
    // get the table element already from index
    var table = document.getElementById('pixelCanvas');
    $('form').on('submit', function() {
        event.preventDefault();

        // Select color input
        var selectColor = $('#colorPicker').val();

        // Select size input
        var gridHeight = $('#inputHeight').val();
        var gridWidth = $('#inputWeight').val();

        // Create table body
        var tableBody = document.createElement('TBODY');

        //append table body to the table element created
        table.appendChild(tableBody);

        // for loop to create cells from the given input
        for (var row = 0; row < gridHeight; row++) {
            // create rows
            var tableRow = document.createElement('TR');
            // APPEND ROWS TO BODY
            tableBody.appendChild(tableRow);

            // CREATE TABLE DATA
            for (var col = 0; col < gridWidth; col++) {
                var tableData = document.createElement('TD');
                // APPEND TEBLE DATA TO TABLE ROW
                tableRow.appendChild(tableData);
            }
        };
    });




}
makeGrid()


// });