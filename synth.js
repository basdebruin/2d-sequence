// synth definition
// bas de bruin

// define new Tone membrane synth
const synth = new Tone.MembraneSynth({
    pitchDecay: 0.01,
    octaves: 1,

    volume: -10
}).toMaster();



// // resume audio context on click
// function resumeAudioContext() {
//     Tone.context.resume();
//     console.log("Audio resumed");
// }
// // add to all buttons
// document.querySelectorAll('button').forEach( elem => { 
//     elem.addEventListener('click', resumeAudioContext, { once: true })
// });