$(function() {
    // Select color input
    // Select size input
    // When size is submitted by the user, call makeGrid()

    function makeGrid() {
        // Your code goes here!
        // GET TABLE ELEMENT AND STORE AS VARIABLE
        var table = document.getElementById('pixelCanvas');
        $('form').on('submit', function() {
            event.preventDefault();

            // SELECT COLOUR INPUT
            

            // SELECT SIZE INPUT
            let gridHeight = $('#inputHeight').val();
            let gridWidth = $('#inputWeight').val();

            // CREATE TABLE BODY

            let tableBody = document.createElement('TBODY');

            // APPEND TABLE BODY TO TABLE ELEMENT
            table.appendChild(tableBody);

            // FOR LOOP TO CREATE CELLS FROM inputHeight and inputWeight
            for (var row = 0; row < gridHeight; row++) {

                // CREATE TABLE ROWS
                let tableRow = document.createElement('TR');

                // APPEND ROWS TO BODY
                tableBody.appendChild(tableRow);

                // CREATE TABLE CELLS
                for (var col = 0; col < gridWidth; col++) {
                    let tableData = document.createElement('TD');
                    // APPEND TABLE CELL TO ROW
                    tableRow.appendChild(tableData);
                }

            };
            // CLEAR CANVAS ON CHANGE IN INPUT VALUES
            $('#inputHeight').on('change', function() {
                $('#pixelCanvas').html('');
            })
            $('#inputWeight').on('change', function() {
                $('#pixelCanvas').html('');
            })
            // CELL CLICKER
            $('td').click(function() {
                var selectedColor = $('#colorPicker').val();
                $(this).css('background-color', selectedColor);
            });
        });
    }
    makeGrid()
});