const keyboardAudioEl = document.getElementById('keyboard-audio');
const sentAudioEl = document.getElementById('sent-audio');
const thinkingAudioEl = document.getElementById('computer-calculating-audio');
const aiTypingAudioEl = document.getElementById('ai-typing-audio');
const intenseBGMAudioEl = document.getElementById('intense-bgm-audio');
keyboardAudioEl.load();
sentAudioEl.load();
thinkingAudioEl.load();
aiTypingAudioEl.load();
intenseBGMAudioEl.load();
intenseBGMAudioEl.loop = true;
keyboardAudioEl.volume = 1;
keyboardAudioEl.loop = true;
// sentAudioEl.loop = true;
thinkingAudioEl.loop = true;
aiTypingAudioEl.loop = true;

let started = false;
document.addEventListener('click', async function () {
    if (started) return;
    started = true;
    hideAds();
    miInputBoxEl.innerHTML = '';
    await sleep(2000);

    intenseBGMAudioEl.volume = 0.1;
    intenseBGMAudioEl.play();
    await startChat();
})

const miInputBoxEl = document.getElementById('mi-input-box');
const innerContainerEl = document.getElementById('inner-container');

async function pushSenderMessage(data) {
    await showSenderTyping(data);
    await sleep(500);
    await clearSenderMessage(data);
    await showSenderMessage(data);
}

async function showBigScreenImage(imageUrl, duration = 3000) {
    if (!imageUrl) return;
    const overlay = document.getElementById('big-screen-overlay');
    const overlayImg = document.getElementById('big-screen-image');
    const progressFill = document.getElementById('big-screen-progress-fill');
    if (!overlay || !overlayImg) return;

    overlayImg.src = imageUrl;

    if (progressFill) {
        progressFill.style.transition = 'none';
        progressFill.style.width = '0%';
    }

    void overlay.offsetWidth;
    overlay.classList.add('active');

    if (progressFill) {
        setTimeout(() => {
            progressFill.style.transition = `width ${duration}ms linear`;
            progressFill.style.width = '100%';
        }, 50);
    }

    await sleep(duration);

    overlay.classList.remove('active');
    await sleep(400);
}

async function pushReceiverMessage(data) {
    let receiverMessageTopEl = document.createElement('div');
    receiverMessageTopEl.classList.add('receiver-message-top-container');
    if (data.linked) {
        receiverMessageTopEl.classList.add('receiver-message-margin-top');
    }
    let receiverMessageEl = document.createElement('div');
    receiverMessageEl.classList.add('receiver-message-container');

    // Display image in chat if provided
    if (data.image) {
        let imgContainerEl = document.createElement('div');
        imgContainerEl.classList.add('receiver-image-container');
        imgContainerEl.title = 'Click to view full screen';
        let imgEl = document.createElement('img');
        imgEl.src = data.image;
        imgEl.alt = data.caption || 'Illustration';
        imgEl.classList.add('receiver-message-image');
        imgContainerEl.appendChild(imgEl);
        imgContainerEl.addEventListener('click', () => {
            showBigScreenImage(data.image, 3000);
        });
        receiverMessageEl.appendChild(imgContainerEl);
    }

    let messageSpanEl = null;
    if (data.text) {
        messageSpanEl = document.createElement('span');
        messageSpanEl.classList.add('receiver-message-text');
        receiverMessageEl.appendChild(messageSpanEl);
    }

    receiverMessageTopEl.appendChild(receiverMessageEl);
    innerContainerEl.appendChild(receiverMessageTopEl);

    // If an image was sent in chat:
    // 1. Show it in chat first
    // 2. Showcase it on big screen for a few seconds
    // 3. Return to chat before typing out the text
    if (data.image) {
        await sleep(600);
        const duration = data.bigScreenDuration || 3000;
        await showBigScreenImage(data.image, duration);
        await sleep(350);
    }

    if (data.text && messageSpanEl) {
        // speakText(data.text, 1, voices[11]);
        await typeWriter({
            textEl: messageSpanEl,
            text: data.text,
            typingSpeed: 70,
            soundEl: aiTypingAudioEl
        });
    }
}

async function receiverThinking(data) {
    thinkingAudioEl.currentTime = 0;
    thinkingAudioEl.play();
    let receiverMessageTopEl = document.createElement('div');
    receiverMessageTopEl.classList.add('receiver-message-top-container');
    let receiverMessageEl = document.createElement('div');
    receiverMessageEl.classList.add('receiver-message-container');
    receiverMessageEl.classList.add('receiver-thinking-container');
    let spinnerEl = document.createElement('div');
    spinnerEl.classList.add('spinner');
    receiverMessageEl.appendChild(spinnerEl);

    let messageSpanEl = document.createElement('span');
    messageSpanEl.classList.add('receiver-message-text');
    messageSpanEl.classList.add('receiver-thinking-text');
    receiverMessageEl.appendChild(messageSpanEl);
    receiverMessageTopEl.appendChild(receiverMessageEl);
    innerContainerEl.appendChild(receiverMessageTopEl);

    for (let i = 0; i < data.messages.length; i++) {
        let messageObject = data.messages[i];
        messageSpanEl.innerText = messageObject.text;
        await sleep(messageObject.time);
    }

    thinkingAudioEl.pause();
    receiverMessageTopEl.remove();
}

async function showSenderMessage(data) {
    hidePlaceLabel();
    sentAudioEl.currentTime = 0;
    sentAudioEl.play();
    let senderMessageTopEl = document.createElement('div');
    senderMessageTopEl.classList.add('sender-message-top-container');
    let senderMessageEl = document.createElement('div');
    senderMessageEl.classList.add('sender-message-container');
    if (data.image) {
        let imgContainerEl = document.createElement('div');
        imgContainerEl.classList.add('sender-image-container');
        let imgEl = document.createElement('img');
        imgEl.src = data.image;
        imgEl.classList.add('sender-message-image');
        imgContainerEl.appendChild(imgEl);
        senderMessageEl.appendChild(imgContainerEl);
    }
    if (data.text) {
        let messageSpanEl = document.createElement('span');
        messageSpanEl.classList.add('sender-message-text');
        messageSpanEl.innerText = data.text;
        senderMessageEl.appendChild(messageSpanEl);
    }
    senderMessageTopEl.appendChild(senderMessageEl);
    innerContainerEl.appendChild(senderMessageTopEl);
}

async function clearSenderMessage(data) {
    miInputBoxEl.textContent = '';
}

async function chatEnded(data) {
    let endedMessageTopEl = document.createElement('div');
    endedMessageTopEl.classList.add('ended-message-top-container');
    let endedMessageEl = document.createElement('div');
    endedMessageEl.classList.add('ended-message-container');
    let messageSpanEl = document.createElement('span');
    messageSpanEl.classList.add('ended-message-text');
    messageSpanEl.innerText = `${data.text}`;
    endedMessageEl.appendChild(messageSpanEl);
    endedMessageTopEl.appendChild(endedMessageEl);
    innerContainerEl.appendChild(endedMessageTopEl);
}

function hidePlaceLabel() {
    const placeLabelEl = document.getElementById('place-label');
    if (placeLabelEl) {
        placeLabelEl.remove();
    }
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

async function showSenderTyping(data) {
    // speakText(data.text, 1.25, null);
    await typeWriter({
        textEl: miInputBoxEl,
        text: data.text,
        typingSpeed: data.typingSpeed,
        soundEl: keyboardAudioEl
    });
}

let typingText = '';
let speed = 0;
let charIndex = 0;
let pauseCharacters = [];
let specialLength = 1;
async function typeWriter({ textEl, text, typingSpeed, soundEl }) {
    if (textEl && text && typingSpeed && soundEl) {
        soundEl.currentTime = 0;
        await soundEl.play();
    };
    if (text) typingText = text;
    if (typingSpeed) speed = typingSpeed;

    if (charIndex < typingText.length) {
        textEl.textContent = textEl.textContent.substring(0, textEl.textContent.length - specialLength);
        textEl.textContent += typingText.charAt(charIndex);

        if (charIndex != typingText.length - 1) {
            textEl.textContent += '|';
        }

        charIndex++;
        await sleep(speed);
        await typeWriter({ textEl, soundEl });
    } else {
        typingText = '';
        speed = 0;
        charIndex = 0;
        await soundEl.pause();
    }
}

async function sleep(ms) {
    return new Promise(res => setTimeout(() => res(), ms));
}

window.addEventListener('load', function () {
    speechSynthesis.cancel();
    miInputBoxEl.innerText = '';
    const bigScreenOverlayEl = document.getElementById('big-screen-overlay');
    if (bigScreenOverlayEl) {
        bigScreenOverlayEl.addEventListener('click', () => {
            bigScreenOverlayEl.classList.remove('active');
        });
    }
})

async function showAds() {
    document.body.style.transform = 'scale(1)';
    const innerContainer = document.getElementById('inner-container');
    innerContainer.style.transform = '';

    const leftAdContainer = document.getElementById('left-ad-container');
    leftAdContainer.style.display = 'flex';
    
    const rightAdContainer = document.getElementById('right-ad-container');
    rightAdContainer.style.display = 'flex';
}

async function hideAds() {
    document.body.style.overflow = 'hidden';
    document.body.style.transition = 'transform 1s ease-in';
    document.body.style.transform = 'scale(1.6)';

    const innerContainer = document.getElementById('inner-container');
    innerContainer.style.transform = 'translateY(-170px)';

    const leftAdContainer = document.getElementById('left-ad-container');
    leftAdContainer.style.display = 'none';
    
    const rightAdContainer = document.getElementById('right-ad-container');
    rightAdContainer.style.display = 'none';
}