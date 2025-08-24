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
        src: './assets/wormhole.png',
        cssClass: '',
        style: '',
        transition: 'transform 40s linear',
        transform: 'scale(3)',
        stayTime: 60000
    });
}


async function populateTexts() {
    let entireText = `A wormhole is a hypothetical tunnel in spacetime that could connect two distant points in the universe. Imagine space as a sheet of paper: if you fold the paper and poke a hole through it, two far-apart points suddenly touch. That shortcut is like a wormhole. In theory, it could let you travel huge distances—or even through time—much faster than light would normally allow.`;
    speakText(entireText, 1, voices[11]);
    
    let text = `A wormhole is a hypothetical tunnel`;
    await addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });

    await sleep(text.length * 60);
    text = `in spacetime that could connect`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });

    await sleep(text.length * 60);
    text = `two distant points in the universe`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });

    await sleep(text.length * 60);
    text = `Imagine space as a sheet of paper:`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });

    await sleep(text.length * 60);
    text = `if you fold the paper and poke a hole through it`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });


    await sleep(text.length * 60);
    text = `two far-apart points suddenly touch`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });

    await sleep(text.length * 60);
    text = `That shortcut is like a wormhole`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });


    await sleep(text.length * 60);
    text = `In theory`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });

    await sleep(text.length * 60);
    text = `it could let you travel huge distances`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });


    await sleep(text.length * 60);
    text = `or even through time`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });

    await sleep(text.length * 60);
    text = `much faster than light would normally allow`;
    addText({
        textHTML: `<div style="font-family: 'Zilla Slab'; font-size: 28px;">${text}</div>`,
        animationType: 'slideInSlideOut'
    });

}