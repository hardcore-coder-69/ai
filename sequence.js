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
        transition: 'transform 30s linear',
        transform: 'scale(3)',
        stayTime: 60000
    });
}


async function populateTexts() {
    let entireText = `Did you know that black holes aren’t actually holes in space? Instead, They’re incredibly dense objects with gravity so strong that nothing can escape, not even light. Imagine squeezing the mass of our Sun into a sphere of a few meters radius, that’s how dense they are.`;
    speakText(entireText, 0.9, null);

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
    text = `actually holes in space?`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });

    await sleep(text.length * 60);
    text = `Instead,`;
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
    text = `that nothing can escape`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });

    await sleep(text.length * 60);
    text = `not even light`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });


    await sleep(text.length * 60);
    text = `Imagine squeezing the mass of our Sun`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });

    await sleep(text.length * 60);
    text = `into a sphere of a few meters radius`;
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