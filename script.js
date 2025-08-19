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
keyboardAudioEl.loop = true;
// sentAudioEl.loop = true;
thinkingAudioEl.loop = true;
aiTypingAudioEl.loop = true;

let started = false;
document.addEventListener('click', async function () {
    if (started) return;
    started = true;
    miInputBoxEl.innerHTML = '';
    await sleep(2000);

    intenseBGMAudioEl.volume = 0.3;
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

async function pushReceiverMessage(data) {
    let receiverMessageTopEl = document.createElement('div');
    receiverMessageTopEl.classList.add('receiver-message-top-container');
    if (data.linked) {
        receiverMessageTopEl.classList.add('receiver-message-margin-top');
    }
    let receiverMessageEl = document.createElement('div');
    receiverMessageEl.classList.add('receiver-message-container');
    let messageSpanEl = document.createElement('span');
    messageSpanEl.classList.add('receiver-message-text');
    receiverMessageEl.appendChild(messageSpanEl);
    receiverMessageTopEl.appendChild(receiverMessageEl);
    innerContainerEl.appendChild(receiverMessageTopEl);
    await typeWriter({
        textEl: messageSpanEl,
        text: data.text,
        typingSpeed: 50,
        soundEl: aiTypingAudioEl
    });
    // messageSpanEl.innerText = data.text;
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
    let messageSpanEl = document.createElement('span');
    messageSpanEl.classList.add('sender-message-text');
    messageSpanEl.innerText = data.text;
    senderMessageEl.appendChild(messageSpanEl);
    senderMessageTopEl.appendChild(senderMessageEl);
    innerContainerEl.appendChild(senderMessageTopEl);
}

async function clearSenderMessage(data) {
    miInputBoxEl.textContent = '';
}

function hidePlaceLabel() {
    const placeLabelEl = document.getElementById('place-label');
    if (placeLabelEl) {
        placeLabelEl.remove();
    }
}

async function showSenderTyping(data) {
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