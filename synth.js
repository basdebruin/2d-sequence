// synth definition
// bas de bruin

// define new Tone membrane synth
const synth = new Tone.MembraneSynth({
    pitchDecay: 0.01,
    octaves: 1,

    volume: -10
}).toMaster();
