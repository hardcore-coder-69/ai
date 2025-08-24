const containerEl = document.getElementById('container');
const intenseBGMAudioEl = document.getElementById('intense-bgm-audio');
intenseBGMAudioEl.load();
intenseBGMAudioEl.loop = true;
intenseBGMAudioEl.volume = 0.1;


async function addImage({ src, cssClass, style, stayTime, transition, transform }) {
    const imageEl = document.getElementById('image');
    imageEl.setAttribute('src', src);

    if (cssClass) {
        imageEl.classList.add(cssClass);
    }

    if (style) {
        imageEl.style = style;
    }

    if (transition) {
        imageEl.style.transition = transition;
    }

    imageEl.style.display = 'block';
    await sleep(100);
    imageEl.style.transform = transform;
    await sleep(stayTime);
    imageEl.style.transition = '';
    imageEl.style.transform = '';
    imageEl.style.display = 'none';
    await sleep(100);
}





async function addText({ textHTML, animationType }) {
    const textEl = document.createElement('div');
    textEl.classList.add('text-container');
    textEl.innerHTML = textHTML;

    if (animationType && animationType == "slideInSlideOut") {
        textEl.classList.add('slide-in');
    }

    containerEl.appendChild(textEl);
    let stayTime = textEl.innerText.length * 60;
    if (stayTime) {
        setTimeout(() => {
            if (animationType && animationType == "slideInSlideOut") {
                textEl.classList.add('slide-out');
            }

            setTimeout(() => {
                textEl.remove();
            }, 200);
        }, stayTime)
    }
}


async function sleep(ms) {
    return new Promise((res, rej) => setTimeout(() => res(), ms));
}


let voices = [];
async function populateVoices() {
    voices = speechSynthesis.getVoices().sort((a, b) => a.name.localeCompare(b.name));
    console.log(voices);
};
speechSynthesis.onvoiceschanged = populateVoices;
populateVoices();

async function speakText(text, rate, voice) {
    if (!text) return;
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
    const u = new SpeechSynthesisUtterance(text);
    if (voice) u.voice = voice;
    if (rate) u.rate = parseFloat(rate);
    speechSynthesis.speak(u);
}