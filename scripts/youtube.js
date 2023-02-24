function enableYouTube() {
    document.querySelector('#enableYouTubeForm').style.display = "none"
    document.querySelector('.video_sect').style.justifyContent = "space-between"
    document.querySelector('.video_sect').style.overflowX = "scroll"
    document.querySelector('.video_sect').innerHTML = `
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/p5A_IQBmFd0"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/RbSrcwx3OME"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aBqLRGz4Ctk"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    `
}