document.querySelector('#nav_expand').addEventListener('change', (e) => {
    if (document.querySelector('#nav_expand').checked == true) {
        document.querySelector('header nav').style.display = "flex"
    } else {
        document.querySelector('header nav').style.display = "none"
    }
})

const nameTag = document.querySelector('header h2')

nameTag.addEventListener('click', () => {
    window.location.href = "index.html"
})

nameTag.addEventListener('mouseover', () => {
    document.querySelector('header h2').innerText = "der Bahnbabo";
})

nameTag.addEventListener('mouseout', () => {
    document.querySelector('header h2').innerText = "Peter Wirth";
})

let playing = false;
let audio = document.querySelector('audio') ?? undefined;
let titleImageWrapper = document.querySelector('.title-image-wrapper') ?? undefined;
let titleAudio = document.querySelector('#title_audio') ?? undefined;
function toggleSong() {
    if (!audio || !titleImageWrapper || !titleAudio) return;
    if (!playing) {
        audio.play()
        titleImageWrapper.style.outlineColor = "#34b1eb";
        titleImageWrapper.style.outlineWidth = "10px";
        titleImageWrapper.style.outlineOffset = "10px";
        titleImageWrapper.style.outlineStyle = "dashed";
        titleImageWrapper.classList.add('rotate')
        titleAudio.innerText = "anhalten"
        playing = true
        console.debug('playing')
    } else {
        audio.pause()
        titleImageWrapper.style.outlineWidth = "4px";
        titleImageWrapper.style.outlineColor = "#fff";
        titleImageWrapper.style.outlineStyle = "solid";
        titleImageWrapper.style.outlineOffset = "0px";
        titleImageWrapper.classList.remove('rotate')
        titleAudio.innerText = "abspielen"
        playing = false
        console.debug('stoped')
    }
}
