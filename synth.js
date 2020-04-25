// synth definition
// bas de bruin

// define polyphonic synth with reverb
const reverb = new Tone.Freeverb({
    roomSize: 0.85,
    dampening: 2000,
    wet: 0.02
}).toMaster();

const synth = new Tone.PolySynth(6, Tone.MonoSynth, {
    oscillator: {
        type: "sawtooth"
    },
    volume: -20,
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
}).connect(reverb);