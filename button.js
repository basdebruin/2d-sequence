// button class
// bas de bruin

const buttonStates = [
    { color: '#36363D' },  // inactive
    { color: '#e66', note: 'C4' },
    { color: '#5e5', note: 'G4' },
    { color: '#ee6', note: 'E5' }
];

class Button {

    constructor(parent, index) {
        // get grid position
        this.index = index;

        // create element
        this.parent = parent;
        this.elem;
        this.createElem();

        // set state to inactive
        this.state = 0;

        this.lastStrikeId;

        // animate() vars
        this.animationStep = 0;
        this.animationLength = 20;
    }

    createElem() {
        // create button element
        this.elem = this.parent.appendChild(document.createElement('button'));

        // trigger onClick function on buttonclick
        this.elem.addEventListener('click', () => this.onClick());
    }

    onClick() {
        if (globalMode === 'edit') {

            // increment state and change color
            this.state++;
            if (this.state >= buttonStates.length) this.state = 0;

            this.changeColor();

        } else if (globalMode === 'strike') {

            // generate a random number as a unique strike ID, 
            // so cells won't keep triggering eachother
            this.strike(Math.floor(Math.random()*100));

        }
    }

    strike(strikeId) {
        if (this.state !== 0 && this.lastStrikeId !== strikeId) {
            // trigger synth
            // note, duration, when, velocity
            synth.triggerAttackRelease(buttonStates[this.state].note, '4n');

            // trigger animation
            this.animate();

            // remember Strike ID
            this.lastStrikeId = strikeId;
            // strike neighbour cells after beatTime:
            if (this.index - gridSize >= 0)                 // UP
                setTimeout(() => gridItems[this.index - gridSize].strike(strikeId), beatTime); 

            if (this.index + gridSize < gridSize*gridSize)  // DOWN
                setTimeout(() => gridItems[this.index + gridSize].strike(strikeId), beatTime); 

            if (this.index - 1 >= 0)                        // LEFT
                setTimeout(() => gridItems[this.index - 1].strike(strikeId), beatTime);

            if (this.index + 1 < gridSize*gridSize)         // RIGHT
                setTimeout(() => gridItems[this.index + 1].strike(strikeId), beatTime);
        }
    }

    changeColor() {
        // set background color and glow
        this.elem.style.backgroundColor = buttonStates[this.state].color;
        if (this.state !== 0) {
            this.elem.style.boxShadow = '0px 0px 20px -5px' + buttonStates[this.state].color;
        } else {
            this.elem.style.boxShadow = 'none';
        }
    }

    animate() {
        if (this.animationStep < this.animationLength) {

            // calc animation values and set css attributes
            const brightness = 100 + (1 - (this.animationStep / this.animationLength)) * 250;
            const scale =      1   + (1 - (this.animationStep / this.animationLength)) * 0.3;

            this.elem.style.filter = `brightness(${brightness}%)`;
            this.elem.style.transform = `scale(${scale})`;

            this.animationStep++;

            // request next animation frame
            window.requestAnimationFrame(() => { this.animate() });

        } else {
            // reset
            this.changeColor();
            this.elem.style.filter = 'none';
            //this.elem.style.transform = 'none';
            this.animationStep = 0;
        }
    }
    
}