// app.js for 2d sequencer
// bas de bruin

const gridSize = 10;

var globalMode = 'edit';

var gridElement;
var gridItems = [];

function init() {

    gridElement = document.getElementById('grid');
    for (let i = 0; i < gridSize*gridSize; i++) {

        gridItems += new Button(gridElement, i);

    }

}

function setMode(event, mode) {
    globalMode = mode;

    // toggle button activeness
    const nav = document.querySelector('nav').childNodes;
    for (let b of nav) {
        if (b.classList) b.classList.remove('active')
    }
    event.currentTarget.className += " active";
}