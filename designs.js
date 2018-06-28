$(function() {
    // Select color input
    // Select size input
    // When size is submitted by the user, call makeGrid()
    
    // get table element and store as variable
    var table = document.getElementById('pixelCanvas');

    function makeGrid() {
        // Your code goes here!
        $('form').on('submit', function() {
            event.preventDefault();
            
            // clear canvas first on submit
            $('#pixelCanvas').html(''); 

            // select size input
            var gridHeight = $('#inputHeight').val();
            var gridWidth = $('#inputWeight').val();

            // create table body
            var tableBody = document.createElement('TBODY');

            // append table body to table element
            table.appendChild(tableBody);

            // for loop creates cells from variables inputHeight and inputWeight
            for (var row = 0; row < gridHeight; row++) {

                // create table rows
                var tableRow = document.createElement('TR');

                // append rows to table body
                tableBody.appendChild(tableRow);

                // create table cells
                for (var col = 0; col < gridWidth; col++) {
                    var tableData = document.createElement('TD');
                    // append table cells to row
                    tableRow.appendChild(tableData);
                }
            }

            // this event listeners will clear canvas on change in input values
            $('#inputHeight').on('change', function() {
                $('#pixelCanvas').html('');
            })
            $('#inputWeight').on('change', function() {
                $('#pixelCanvas').html('');
            })

            // event listener for cell clicking
            $('td').click(function() {
                // select colour input
                const selectedColor = $('#colorPicker').val();
                $(this).css('background-color', selectedColor);
            });
        });    
    };
    makeGrid()


});