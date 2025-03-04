document.addEventListener("DOMContentLoaded", function () {
    let gifCount = 0;
    const maxGifs = 4;
    const gifContainer = document.getElementById("gif-container");
    const audio = document.getElementById("bg-music");

    document.querySelectorAll(".rickroll-btn").forEach(button => {
        button.addEventListener("click", function () {
            if (gifCount < maxGifs) {
                let gif = document.createElement("img");
                gif.src = "rickroll.gif";
                gif.style.width = "150px";
                gif.style.position = "absolute";
                gif.style.left = Math.random() * window.innerWidth + "px";
                gif.style.top = Math.random() * window.innerHeight + "px";
                document.body.appendChild(gif);
                gifCount++;
            }

            if (audio.paused) {
                audio.play();
            }
        });
    });
});
