import React, { useState, useEffect } from "react";

import "../sass/speed.scss"

const TextToSpeech = ({ text }) => {
    const [isPaused, setIsPaused] = useState(false);
    const [utterance, setUtterance] = useState(null);
    const [voice, setVoice] = useState(null);
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(1);
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        const synth = window.speechSynthesis;

        const loadVoices = () => {
            const voices = synth.getVoices();
            setVoice(voices.find((v) => v.name === voice?.name));
        };

        synth.addEventListener("voiceschanged", loadVoices);

        return () => {
            synth.removeEventListener("voiceschanged", loadVoices);
            synth.cancel();
        };
    }, [voice]);

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(text);
        setUtterance(u);
    }, [text]);

    const handlePlay = () => {
        const synth = window.speechSynthesis;

        if (isPaused) {
            synth.resume();
        } else {
            utterance.voice = voice;
            utterance.pitch = pitch;
            utterance.rate = rate;
            utterance.volume = volume;
            synth.speak(utterance);
        }

        setIsPaused(false);
    };

    const handlePause = () => {
        const synth = window.speechSynthesis;

        synth.pause();

        setIsPaused(true);
    };

    const handleStop = () => {
        const synth = window.speechSynthesis;

        synth.cancel();

        setIsPaused(false);
    };

    const handleVoiceChange = (event) => {
        const voices = window.speechSynthesis.getVoices();
        setVoice(voices.find((v) => v.name === event.target.value));
    };

    const handlePitchChange = (event) => {
        setPitch(parseFloat(event.target.value));
    };

    const handleRateChange = (event) => {
        setRate(parseFloat(event.target.value));
    };

    const handleVolumeChange = (event) => {
        setVolume(parseFloat(event.target.value));
    };

    return (
        <div>
            <div className="Voice">

            <label className="labelBlk">
                Giọng nói:
                <select value={voice?.name} onChange={handleVoiceChange}>
                    {window.speechSynthesis.getVoices().map((voice) => (
                        <option key={voice.name} value={voice.name}>
                            {voice.name}
                        </option>
                    ))}
                </select>
            </label>

            <br />
            </div>
            <div className="condition">

            <label>
                Giọng âm:
                <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={pitch}
                    onChange={handlePitchChange}
                />
            </label>

            <br />

            <label>
                Tốc độ:
                <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={rate}
                    onChange={handleRateChange}
                />
            </label>
            <br />
            <label>
                Âm lượng:
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </label>

            <br />
            </div>
            <div className="buttonVoi">
            <button onClick={handlePlay} className="play">{isPaused ? "Tiếp tục" : "Chơi tiếp"}</button>
            <button onClick={handlePause} className="pause">Tạm ngừng</button>
            <button onClick={handleStop} className="stop">Dừng</button>
            </div>
        </div>
    );
};

export default TextToSpeech;
