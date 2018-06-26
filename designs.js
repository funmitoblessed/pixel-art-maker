// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    // Your code goes here!
    // declare variables to collect value of table height and width
    var gridHeight, gridWidth;
    // event listener for a change in value of Grid Height
    $('#inputHeight').on('change', function () {
        gridHeight = $('#inputHeight').val();
        // return gridHeight;
        console.log(gridHeight);
    });
     // event listener for a change in value of Grid Width
    $('#inputWeight').on('change', function () {
        gridWidth = $('#inputWeight').val();
        // return gridWidth;
        console.log(gridWidth);
    });
    // event listener for the submit button and grid creator
    $('#input').click(function () {
        // $('#pixelCanvas').
        console.log(gridHeight, gridWidth);
    });

}

makeGrid();