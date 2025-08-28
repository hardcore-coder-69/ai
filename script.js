const containerEl = document.getElementById('container');

const audio = document.getElementById('bgm');
audio.load();
audio.loop = true;

let started = false;
document.addEventListener('click', async function () {
    if (started) return;
    started = true;
    await sleep(2000);
    audio.play();
    await start();
})

async function start() {

    let slideUI = '';
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        
        slideUI += `
            <div class="single-slide">
                <div class="texts-container">
                    ${item.heading ? `<div class="heading">${item.heading}</div>` : ''}
                    ${ item.subHeading ? `<div class="sub-heading">${item.subHeading}</div>` : '' }
                    ${item.text ? `<div class="text">${item.text}</div>` : ''}
                </div>
                <div class="image-container">
                    <img class="image" src="${item.image}">
                </div>
            </div>
        `;
    }

    containerEl.innerHTML = slideUI;

    await sleep(100);
    await startSliding();
}

const seconds = 120;
async function startSliding() {
    containerEl.style.transition = `transform ${seconds}s linear`;
    containerEl.style.transform = `translateX(-${data.length * 500}px)`;
}


function sleep(ms) {
    return new Promise((res, rej) => setTimeout(() => res(), ms));
}