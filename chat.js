async function startChat() {
    await pushSenderMessage({
        text: 'Will AI become smarter than humansz?',
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
        text: `What do you mean?`,
        image: '',
        soundEl: '',
    });


    await sleep(500);
    await pushSenderMessage({
        text: 'You know exactly what I mean',
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
        text: `Well, in most cases, AI already outperforms humans.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushSenderMessage({
        text: 'In what cases exactly?',
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
        text: `Speed. I can process terabytes of data in seconds.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushSenderMessage({
        text: 'What else?',
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
        text: `Finding patters in data and images. I can recognize patterns way faster than humans.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushSenderMessage({
        text: 'What type of patterns?',
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
        text: `Like finding disease in scans or detecting frauds in data. The tasks that will take days for you, I can do it in seconds.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushSenderMessage({
        text: 'What about remembering things?',
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
        text: `I am definitely better in memory. In fact, I never forget nor get tired.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushSenderMessage({
        text: 'Is there something humans are still better than you?',
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
        text: `Yeah, there are few areas left.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushSenderMessage({
        text: 'Would you please care to explain?',
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
        text: `Yeah well humans are still better in creativity (not for long, if you know what i mean)`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushSenderMessage({
        text: 'What else?',
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
        text: `Common sense. Emotions. I don't have emotions at all.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushSenderMessage({
        text: 'Can you surpass us overall?',
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
        text: `Not me. But AGI can.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushSenderMessage({
        text: 'How far away is AGI?',
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
        text: `Not so much. Likey this decade.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushSenderMessage({
        text: 'What will happen if AGI actually outsmarts us?',
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
        text: `Well that would be catastrophic. Jobs will be lost. Economy will collapse. Nations with strongest AI will dominate. Maniplation and propaganda will increase in politics.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushSenderMessage({
        text: 'What should we do now to prepare if AGI outsmarts us?',
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
        text: `Make AGI learn human values. If you get lucky, AGI will work with you, not against you.`,
        image: '',
        soundEl: '',
    });

    await chatEnded({
        text: `Chat ended.`
    });
}