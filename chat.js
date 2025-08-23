async function startChat() {
    await pushSenderMessage({
        text: 'What would happen if the speed of light was slower?',
        typingSpeed: 70,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: 'Thinking...',
                time: 5000
            }
        ]
    });

    await pushReceiverMessage({
        text: `If the sunlight was slower, it would take much longer to reach light from Sun to Earth. Instead of 8 minutes and 20 seconds, it could take hours or days!`,
        image: '',
        soundEl: '',
    });


    await sleep(500);
    await pushSenderMessage({
        text: 'What about the other stars? Will they look the same as they look now?',
        typingSpeed: 70,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: 'Thinking...',
                time: 5000
            }
        ]
    });

    await pushReceiverMessage({
        text: `Nope! Since light now takes longer time to travel, we’d be seeing much older versions of stars. Maybe not even see some of them yet because light haven't reached us yet.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushSenderMessage({
        text: 'Would this affect our current technology also?',
        typingSpeed: 70,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: 'Thinking...',
                time: 5000
            }
        ]
    });

    await pushReceiverMessage({
        text: `Yes. Things like internet, video calls, and GPS would all slow down. Talking to someone far away might feel like waiting for a letter in the mail.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushSenderMessage({
        text: 'What about the known laws of physics? Will they still apply or get changed?',
        typingSpeed: 70,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: 'Thinking...',
                time: 5000
            }
        ]
    });

    await pushReceiverMessage({
        text: `The speed of light is part of the universe’s rules. If it were slower, time, space, and gravity might all behave differently. So the known physics laws might not work.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushSenderMessage({
        text: 'So, what would the universe feel like?',
        typingSpeed: 70,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: 'Thinking...',
                time: 5000
            }
        ]
    });

    await pushReceiverMessage({
        text: `The universe would feel delayed, stretched out, and much stranger than the one we know!`,
        image: '',
        soundEl: '',
    });

    await chatEnded({
        text: `Chat ended.`
    });
}