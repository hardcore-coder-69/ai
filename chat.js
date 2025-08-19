async function startChat() {
    await pushSenderMessage({
        text: 'Hello There',
        typingSpeed: 50,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: 'Thinking...',
                time: 2000
            }
        ]
    });

    await pushReceiverMessage({
        text: `Hi There!!!`,
        image: '',
        soundEl: '',
    });

    await pushReceiverMessage({
        text: `As an AI language model, how can I help you?`,
        image: '',
        soundEl: '',
    });

    await pushReceiverMessage({
        text: `What's on the agenda today?`,
        image: '',
        soundEl: '',
    });
}