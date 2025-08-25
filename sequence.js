// Play with images 
// Dramatic sounds
// Voiceover
// Space BGM


document.addEventListener('click', start);
let started = false;
async function start() {
    if (started) return;
    started = true;

    await sleep(2500);
    intenseBGMAudioEl.play();
    await sleep(500);

    populateTexts();
    populateImages();
}


async function populateImages() {
    // await addImage({
    //     src: './assets/blackhole.png',
    //     cssClass: '',
    //     style: '',
    //     transition: 'transform 5s linear',
    //     transform: 'scale(2)',
    //     stayTime: 5000
    // });

    await addImage({
        src: './assets/blackhole.png',
        cssClass: '',
        style: '',
        transition: 'transform 60s linear',
        transform: 'scale(3)',
        stayTime: 60000
    });
}


async function populateTexts() {
    let entireText = `Did you know that black holes aren’t actually holes? They’re incredibly dense objects with gravity so strong that not even light can escape. Imagine cramming the mass of our Sun into a sphere only a few kilometers wide—that’s how dense they are.

Time itself behaves differently near a black hole. If you hovered close to its edge—the event horizon—time for you would slow down compared to someone far away. So, a few hours near a black hole could equal years out in the rest of the universe.

In a way, black holes aren’t just cosmic vacuum cleaners—they’re natural time machines. They bend space and time itself, showing us just how strange and extreme our universe can be.`;
    // speakText(entireText, 1, voices[11]);

    let text = `Did you know`;
    await addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });

    await sleep(text.length * 60);
    text = `that black holes aren’t`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });

    await sleep(text.length * 60);
    text = `actually holes?`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });

    await sleep(text.length * 60);
    text = `They’re incredibly dense`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });

    await sleep(text.length * 60);
    text = `objects with gravity so strong`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });


    await sleep(text.length * 60);
    text = `that not even`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });

    await sleep(text.length * 60);
    text = `light can escape.`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });


    await sleep(text.length * 60);
    text = `Imagine cramming the mass`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });

    await sleep(text.length * 60);
    text = `of our Sun into a sphere`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });


    await sleep(text.length * 60);
    text = `only a few kilometers wide`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });

    await sleep(text.length * 60);
    text = `that’s how dense they are.`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });

}