async function startChat() {
    await pushSenderMessage({
        text: 'Will AI replace jobs?',
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
        text: `Yes — but also no.`,
        image: '',
        soundEl: '',
    });

    await sleep(1000);
    await pushSenderMessage({
        text: 'What does that supposed to mean?',
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
        text: `That means AI will definitely automate certain tasks.`,
        image: '',
        soundEl: '',
    });

    await sleep(1000);
    await pushReceiverMessage({
        text: `Which means some jobs will be replaced.`,
        image: '',
        soundEl: '',
    });

    await sleep(1000);
    await pushReceiverMessage({
        text: `But, AI will also create new opportunities that didn’t exist before.`,
        image: '',
        soundEl: '',
    });

    await sleep(3000);
    await pushSenderMessage({
        text: 'What jobs will be replaced completely?',
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
        text: `Repetitive tasks like Data entry.`,
        image: '',
        soundEl: '',
    });

    await sleep(1000);
    await pushReceiverMessage({
        text: `Pattern-based work like simple coding.`,
        image: '',
        soundEl: '',
    });

    await sleep(1000);
    await pushReceiverMessage({
        text: `Physical jobs with clear rules like Driving (self-driving vehicles).`,
        image: '',
        soundEl: '',
    });

    await sleep(3000);
    await pushSenderMessage({
        text: 'What are low risk jobs?',
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
        text: `Creative fields like Designers, writers, marketers.`,
        image: '',
        soundEl: '',
    });

    await sleep(1000);
    await pushReceiverMessage({
        text: `AI will act as a co-pilot.`,
        image: '',
        soundEl: '',
    });

    await sleep(1000);
    await pushReceiverMessage({
        text: `Increasing the productivity.`,
        image: '',
        soundEl: '',
    });


    await sleep(3000);
    await pushSenderMessage({
        text: 'Other low risk jobs?',
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
        text: `Doctors won’t be replaced.`,
        image: '',
        soundEl: '',
    });

    await sleep(1000);
    await pushReceiverMessage({
        text: `But AI will help diagnose faster.`,
        image: '',
        soundEl: '',
    });

    await sleep(1000);
    await pushReceiverMessage({
        text: `Education: Teachers won’t vanish.`,
        image: '',
        soundEl: '',
    });

    await sleep(1000);
    await pushReceiverMessage({
        text: `But AI tutors will assist students individually`,
        image: '',
        soundEl: '',
    });


    await sleep(3000);
    await pushSenderMessage({
        text: 'Will AI also create new jobs?',
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
        text: `Yes. Definitely.`,
        image: '',
        soundEl: '',
    });

    await sleep(1000);
    await pushReceiverMessage({
        text: `AI will also create new jobs.`,
        image: '',
        soundEl: '',
    });

    await sleep(3000);
    await pushSenderMessage({
        text: 'What new jobs it will create?',
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
        text: `AI trainers.`,
        image: '',
        soundEl: '',
    });

    await sleep(1000);
    await pushReceiverMessage({
        text: `Prompt engineers.`,
        image: '',
        soundEl: '',
    });

    await sleep(1000);
    await pushReceiverMessage({
        text: `Data curators.`,
        image: '',
        soundEl: '',
    });

    await sleep(1000);
    await pushReceiverMessage({
        text: `AI regulators.`,
        image: '',
        soundEl: '',
    });

    await sleep(1000);
    await pushReceiverMessage({
        text: `The Bottom Line:`,
        image: '',
        soundEl: '',
    });

    await sleep(1000);
    await pushReceiverMessage({
        text: `AI won’t replace you. But a person using AI might.`,
        image: '',
        soundEl: '',
    });
}