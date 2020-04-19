// button class
// bas de bruin

const buttonStates = [
    '#36363D', // inactive
    '#e66',
    '#5e5',
    '#ee6'
];

class Button {

    constructor(parent, index) {
        // get grid position
        this.index = index;
        this.gridPos = {
            x: index % gridSize,
            y: Math.floor(index / gridSize)
        };

        // create element
        this.parent = parent;
        this.elem;
        this.createElem();

        // set state to inactive
        this.state = 0;
    }

    createElem() {
        // create button element
        this.elem = this.parent.appendChild(document.createElement('button'));

        // trigger onClick function on buttonclick
        this.elem.addEventListener('click', () => this.onClick());
    }

    onClick() {
        // increment state and change color
        this.state++;
        if (this.state >= buttonStates.length) this.state = 0;

        this.changeColor();
    }

    changeColor() {
        // set background color and glow
        this.elem.style.backgroundColor = buttonStates[this.state];
        if (this.state !== 0) {
            this.elem.style.boxShadow = '0px 0px 20px -5px' + buttonStates[this.state];
        } else {
            this.elem.style.boxShadow = 'none';
        }
    }
    
}