async function startChat() {
    await pushSenderMessage({
        text: 'What is JavaScript?',
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
        text: `JavaScript is like that one friend who shows up uninvited, eats your snacks, but somehow makes the party fun.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `It’s the programming language of the web — basically, without JS, websites would just be boring digital pamphlets.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `let - a box you can change.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `const - a box you can’t change (like your Wi-Fi password that you forgot).`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `var - the weird uncle of JavaScript. Works, but don’t invite him.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `Functions are like vending machines: you put stuff in, and (hopefully) something useful comes out.
Unless you mess up, then they spit out undefined, which is just JS’s way of saying “¯\(ツ)/¯”.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `Objects are like Pokémon cards: you collect properties and show them off.
Want the name? human.name. Want the mood? human.mood. Want respect? Sorry, JavaScript can’t help you there.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `JavaScript doesn’t like waiting. So it says,
“Hey, you do your thing, I’ll come back later.”
This is why JS can fetch data, load memes, and crash your tab — all at once.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `Errors in JS are like mosquitoes. Unexpected, annoying, and always buzzing around your head at 3 AM.
But hey, at least JS gives you stack traces... which are basically GPS directions in a foreign language.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `Why People Hate JS
✅ Runs everywhere (browsers, servers, your fridge if it has Wi-Fi).
✅ Huge ecosystem (npm = “Never-ending Package Mayhem”).`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `JavaScript doesn’t follow rules. It writes them, then laughs at you.`,
        image: '',
        soundEl: '',
    });

    await sleep(500);
    await pushReceiverMessage({
        text: `JavaScript is like magic: powerful, unpredictable, sometimes scary — but without it, the web would just sit there staring at you like Internet Explorer.`,
        image: '',
        soundEl: '',
    });


    await chatEnded({
        text: `Chat ended.`
    });
}