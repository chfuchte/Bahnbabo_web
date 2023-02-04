document.querySelector('#nav_expand').addEventListener('change', (e) => {
    if (document.querySelector('#nav_expand').checked == true) {
        document.querySelector('header nav').style.display = "flex"
    } else {
        document.querySelector('header nav').style.display = "none"
    }
})