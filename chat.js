async function startChat() {
    await pushSenderMessage({
        text: 'What would actually happen if Earth passed near a black hole?',
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
        text: `The effects would be catastrophic.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `The immense gravity of the black hole would begin to disturb Earth’s orbit.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `It could even pull Earth away from the Sun.`,
        image: '',
        soundEl: '',
    });

    await sleep(2000);
    await pushSenderMessage({
        text: 'Earth could be ripped out of the solar system?',
        typingSpeed: 50,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: '',
                time: 2000
            }
        ]
    });

    await pushReceiverMessage({
        text: `Yes.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `If it got too close, the gravitational tides would stretch Earth itself.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `We call this spaghettification—the planet would be torn apart, layer by layer.`,
        image: '',
        soundEl: '',
    });

    await sleep(2000);
    await pushSenderMessage({
        text: 'What about life on Earth?',
        typingSpeed: 50,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: '',
                time: 2000
            }
        ]
    });

    await pushReceiverMessage({
        text: `Long before spaghettification, life would end.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `The intense radiation near the black hole would fry the atmosphere.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `Oceans would boil, and ecosystems would collapse almost instantly.`,
        image: '',
        soundEl: '',
    });
}