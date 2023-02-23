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
    if (!playing) {
        toggleSong()
        playingBecauseOfHover = true;
    }
})

nameTag.addEventListener('mouseout', () => {
    document.querySelector('header h2').innerText = "Peter Wirth";
    if (playing && playingBecauseOfHover) {
        toggleSong()
        playingBecauseOfHover = false;
    }
})

let playing = false;
let playingBecauseOfHover = false;
function toggleSong() {
    if (!playing) {
        document.querySelector('audio').play()
        document.querySelector('.title-image-wrapper').style.outlineColor = "#34b1eb";
        document.querySelector('.title-image-wrapper').style.outlineWidth = "10px";
        document.querySelector('.title-image-wrapper').style.outlineOffset = "10px";
        document.querySelector('.title-image-wrapper').style.outlineStyle = "dashed";
        document.querySelector('.title-image-wrapper').classList.add('rotate')
        document.querySelector('#title_audio').innerText = "anhalten"
        playing = true
        console.debug('playing')
    } else {
        document.querySelector('audio').pause()
        document.querySelector('.title-image-wrapper').style.outlineWidth = "4px";
        document.querySelector('.title-image-wrapper').style.outlineColor = "#fff";
        document.querySelector('.title-image-wrapper').style.outlineStyle = "solid";
        document.querySelector('.title-image-wrapper').style.outlineOffset = "0px";
        document.querySelector('.title-image-wrapper').classList.remove('rotate')
        document.querySelector('#title_audio').innerText = "abspielen"
        playing = false
        console.debug('stoped')
    }
}