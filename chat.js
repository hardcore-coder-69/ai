async function startChat() {
    await pushSenderMessage({
        text: "Explain quantum physics to me like i'm no expert. No scary equations.",
        typingSpeed: 70,
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
        text: `Think of quantum physics as the rulebook for how tiny things behave—like atoms and even smaller stuff. And spoiler: they’re weird.`,
        image: './vs/1.png',
        soundEl: '',
    });

    await sleep(500);

    await pushSenderMessage({
        text: "Weird how?",
        typingSpeed: 70,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: 'Thinking...',
                time: 1000
            }
        ]
    });
    
    await pushReceiverMessage({
        text: `Imagine you toss a ball. You know where it is and how fast it’s going. Easy.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `Now imagine the ball is so tiny that it refuses to behave. That’s quantum physics. At that scale, nature basically says, “Best I can do is probabilities.”`,
        image: '',
        soundEl: '',
    });

    await sleep(500);

    await pushSenderMessage({
        text: "So… it’s guessing?",
        typingSpeed: 70,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: 'Thinking...',
                time: 500
            }
        ]
    });
    
    await pushReceiverMessage({
        text: `Kinda! Instead of saying “the electron is here,” quantum physics says, “the electron is probably around here.” Until you look at it. Then it picks a spot.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);

    await pushSenderMessage({
        text: "Why does looking matter?",
        typingSpeed: 70,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: 'Thinking...',
                time: 300
            }
        ]
    });
    
    await pushReceiverMessage({
        text: `Because in quantum land, observing something is like interrupting it mid-vibe.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `Before you look, a particle exists in many possible states at once—this is called superposition.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);

    await pushSenderMessage({
        text: "Wait, many states at once?",
        typingSpeed: 70,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: 'Thinking...',
                time: 300
            }
        ]
    });
    
    await pushReceiverMessage({
        text: `Exactly. Imagine you haven’t checked your phone yet.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `Your message is both read and unread at the same time. Once you open it—boom—it’s officially read.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);

    await pushSenderMessage({
        text: "That’s… unsettling.",
        typingSpeed: 70,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: 'Thinking...',
                time: 500
            }
        ]
    });
    
    await pushReceiverMessage({
        text: `Welcome to quantum physics 😄`,
        image: '',
        soundEl: '',
    });

    await chatEnded({
        text: `Chat ended.`
    });
}