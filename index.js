setInterval(() => {
    let img = document.querySelector("img");
    img.src = img.src.split("?")[0] + "?" + new Date().getTime();
}, 2500); // Cambia el GIF cada 2 segundos (ajústalo según la duración 

const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const message = document.querySelector(".message");
const img = document.querySelector("img");

yesButton.addEventListener("click", () => {
    message.style.display = "block";
    yesButton.style.display = "none";
    img.src = "img/gatolove.gif";
});

noButton.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});


setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 500);
