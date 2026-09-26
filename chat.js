async function startChat() {
    await pushSenderMessage({
        text: "Is time travel actually possible, or just sci-fi?",
        typingSpeed: 70,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: 'Searching theoretical physics...',
                time: 1500
            }
        ]
    });

    await pushReceiverMessage({
        text: `Plot twist: You’re already doing it right now, at one second per second.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);

    await pushReceiverMessage({
        text: `Jokes aside—traveling to the future? It’s 100% scientifically real and proven.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);

    await pushSenderMessage({
        text: "Wait, seriously? How?",
        typingSpeed: 70,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: 'Consulting Einstein...',
                time: 1200
            }
        ]
    });

    await pushReceiverMessage({
        text: `Thank Albert Einstein. He proved that time isn’t a fixed ticking clock—it stretches and slows down.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);

    await pushReceiverMessage({
        text: `The faster you move through space, the slower you move through time. This is called time dilation.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);

    await pushSenderMessage({
        text: "Has anyone actually experienced this?",
        typingSpeed: 70,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: 'Checking space flight records...',
                time: 1000
            }
        ]
    });

    await pushReceiverMessage({
        text: `Yes! Cosmonaut Sergei Krikalev spent over 803 days orbiting Earth at 17,500 mph.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);

    await pushReceiverMessage({
        text: `Because of his speed, he literally traveled 0.02 seconds into the future. He is younger than he should be!`,
        image: '',
        soundEl: '',
    });

    await sleep(500);

    await pushSenderMessage({
        text: "0.02 seconds is tiny. Can we jump years ahead?",
        typingSpeed: 70,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: 'Calculating near-lightspeed travel...',
                time: 1000
            }
        ]
    });

    await pushReceiverMessage({
        text: `Easily—in theory. Imagine you board a rocket cruising at 99.9% the speed of light for 5 years.`,
        image: './images/rocket.jpg',
        soundEl: '',
    });

    await sleep(500);

    await pushReceiverMessage({
        text: `For you, only 5 years passed. But back on Earth, over 110 years have flown by. Everyone you knew is history.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);

    await pushSenderMessage({
        text: "What about gravity, like in Interstellar?",
        typingSpeed: 70,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: 'Simulating extreme gravitational fields...',
                time: 800
            }
        ]
    });

    await pushReceiverMessage({
        text: `Gravity bends time too! The stronger the gravity, the slower time ticks.`,
        image: './images/black_hole.jpg',
        soundEl: '',
    });

    await sleep(500);

    await pushReceiverMessage({
        text: `Park near a supermassive black hole for an hour, and decades will pass on Earth before you leave.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);

    await pushSenderMessage({
        text: "Mind blown. But what about going back to the past?",
        typingSpeed: 70,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: 'Warning: Paradox imminent...',
                time: 1200
            }
        ]
    });

    await pushReceiverMessage({
        text: `That’s where physics starts screaming.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);

    await pushReceiverMessage({
        text: `General relativity does allow theoretical shortcuts called wormholes—bridges connecting two points in space-time.`,
        image: './images/wormhole.jpg',
        soundEl: '',
    });

    await sleep(500);

    await pushSenderMessage({
        text: "So can we build a wormhole?",
        typingSpeed: 70,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: 'Synthesizing exotic matter...',
                time: 900
            }
        ]
    });

    await pushReceiverMessage({
        text: `Keeping one open requires 'exotic matter' with negative mass—which might not even exist.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);

    await pushReceiverMessage({
        text: `And worse: you run directly into the Grandfather Paradox.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);

    await pushSenderMessage({
        text: "If you stop your grandparents from meeting... do you vanish?",
        typingSpeed: 70,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: 'Evaluating quantum timeline theories...',
                time: 1000
            }
        ]
    });

    await pushReceiverMessage({
        text: `Physicists offer two mind-bending solutions:`,
        image: '',
        soundEl: '',
    });

    await sleep(500);

    await pushReceiverMessage({
        text: `1. The Multiverse: Traveling back branches into an alternate timeline, leaving your original past untouched.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);

    await pushReceiverMessage({
        text: `2. Self-Consistency: Whatever you do in the past already happened. You can’t change it—you might even cause it!`,
        image: '',
        soundEl: '',
    });

    await sleep(500);

    await pushSenderMessage({
        text: "So moving forward is guaranteed, but the past is locked down?",
        typingSpeed: 70,
        image: '',
        soundEl: '',
    });

    await receiverThinking({
        messages: [
            {
                text: 'Final conclusion...',
                time: 600
            }
        ]
    });

    await pushReceiverMessage({
        text: `Spot on! You can sprint into tomorrow, but yesterday is fiercely guarded by the laws of physics.`,
        image: '',
        soundEl: '',
    });

    await chatEnded({
        text: `Chat ended.`
    });
}