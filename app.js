// app.js for 2d sequencer
// bas de bruin

const gridSize = 10;
const beatTime = 300; // beat length in ms

var globalMode = 'edit';

var gridElement;
var gridItems = [];

function init() {

    gridElement = document.getElementById('grid');
    gridElement.innerHTML = "";
    for (let i = 0; i < gridSize*gridSize; i++) {

        gridItems[i] = new Button(gridElement, i);

    }

}

// functions triggered by buttons: 
function setMode(event, mode) {
    globalMode = mode;

    // toggle button activeness
    const nav = document.querySelector('#switch').childNodes;
    for (let b of nav) {
        if (b.classList) b.classList.remove('active')
    }
    event.currentTarget.className += " active";
}
function clearGrid() {
    // remove all timers
    var highestTimeoutId = setTimeout(";");
    for (var i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
    }
    // reinit grid
    init();
}