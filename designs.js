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
            var selectColor = $('#colorPicker').val();

            // SELECT SIZE INPUT
            var gridHeight = $('#inputHeight').val();
            var gridWidth = $('#inputWeight').val();

            // CREATE TABLE BODY
           
            var tableBody = document.createElement('TBODY');
            
            // APPEND TABLE BODY TO TABLE ELEMENT
            table.appendChild(tableBody);

            // FOR LOOP TO CREATE CELLS FROM inputHeight and inputWeight
            for (var row = 0; row < gridHeight; row++) {

                // CREATE TABLE ROWS
                var tableRow = document.createElement('TR');

                // APPEND ROWS TO BODY
                tableBody.appendChild(tableRow);

                // CREATE TABLE CELLS
                for (var col = 0; col < gridWidth; col++) {
                    var tableData = document.createElement('TD');
                    // APPEND TABLE CELL TO ROW
                    tableRow.appendChild(tableData);
                }
            };
            $('#inputHeight').on('change', function () {
                $('#pixelCanvas').html('');
            })
            $('#inputWeight').on('change', function () {
                $('#pixelCanvas').html('');
            })
        });


        // $('td').on('click', function() {
        //     $(this).toggleClass('color', 'red');
        //    });


    }
    makeGrid()


});