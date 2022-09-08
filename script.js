const textarea = document.querySelector("textarea");
const convertBtn = document.querySelector("button");

function textToSpeech(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

convertBtn.addEventListener("click", () => {
    if (textarea.value !== "") {
        textToSpeech(textarea.value);
    }
})
// window.load(encodeURI)
