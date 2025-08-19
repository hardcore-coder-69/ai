async function startChat() {
    await pushSenderMessage({
        text: 'We must colonize Mars because Earth’s future is uncertain. Climate change, nuclear threats, or even asteroid impacts could wipe us out. A second home ensures humanity’s survival.',
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
        text: `Survival is important, but Mars colonization is a distraction.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `The billions spent on rockets and habitats could be used to fix Earth’s pressing crises.`,
        image: '',
        linked: true,
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `Poverty, deforestation, and climate collapse.`,
        image: '',
        linked: true,
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `Why escape when we need to repair?`,
        image: '',
        linked: true,
        soundEl: '',
    });


    await pushSenderMessage({
        text: 'History shows progress comes from bold steps. Colonizing Mars will push us to advance life-support systems, renewable energy, robotics—technologies that can also help Earth. It’s not escape; it’s preparation. We must colonize Mars because Earth’s future is uncertain. Climate change, nuclear threats, or even asteroid impacts could wipe us out. A second home ensures humanity’s survival.',
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
        text: `Preparation is valuable, but Mars is hostile—thin atmosphere, extreme cold, no breathable air. Even with technology, life there will be fragile. Isn’t it wiser to secure our robust, life-sustaining planet rather than gamble on a barren one?`,
        image: '',
        soundEl: '',
    });

    await pushSenderMessage({
        text: 'Mars can be hostile for now. But the Moon was once seen as unreachable, yet we walked on it. Every great leap seemed impossible until it was done. Mars colonization will expand human potential and unite nations in a common cause.',
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
        text: `Or divide them further. Space colonization could deepen inequality—only the wealthy and powerful nations benefit, while billions still struggle for food and water here on Earth. Shouldn’t justice at home come before adventure in space?`,
        image: '',
        soundEl: '',
    });

    await pushSenderMessage({
        text: 'Exploration has always lifted humanity as a whole. The internet, GPS, satellites—all came from space research. Colonizing Mars will yield breakthroughs beyond imagination. And if Earth falls, at least our species continues.',
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
        text: `That’s the core disagreement: I believe saving Earth is not optional. This planet is unique, irreplaceable. Instead of preparing to leave, humanity should learn stewardship. Because no matter how far we go, Earth is our true home.`,
        image: '',
        soundEl: '',
    });
}