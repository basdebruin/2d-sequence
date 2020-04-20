// synth definition
// bas de bruin

// define new Tone membrane synth
// const synth = new Tone.MembraneSynth({
//     pitchDecay: 0.01,
//     octaves: 1,

//     volume: -10
// }).toMaster();

const synth = new Tone.PolySynth(6, Tone.MonoSynth, {
    oscillator: {
        type: "sawtooth"
    },
    volume: -10,
    filter: {
        Q: 4,
    },
    filterEnvelope: {
        attack: 0.01,
        decay: 0.3,
        sustain: 0.0,
        release: 1,
        baseFrequency: 200,
        octaves: 4,
        exponent: 2
    }
}).toMaster();