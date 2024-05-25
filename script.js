let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

let recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = 'fr-FR'; // Langue française, modifiez selon vos besoins

recognition.onresult = function(event) {
    let speechToText = event.results[event.results.length - 1][0].transcript;
    document.querySelector("textarea").value = speechToText;
};

recognition.onerror = function(event) {
    console.error('Erreur de reconnaissance vocale: ', event.error);
};

recognition.onend = function() {
    console.log('Fin de la reconnaissance vocale.');
};

function startSpeechToText() {
    recognition.start();
}

function stopSpeechToText() {
    recognition.stop();
}

