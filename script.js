console.log("Script Loaded");
const pages = document.querySelectorAll(".page");

const untilMusic = document.getElementById("untilMusic");
const birthdayMusic = document.getElementById("birthdayMusic");

function nextPage(pageNumber){

    pages[pageNumber - 1].classList.remove("active");

    pages[pageNumber].classList.add("active");

    if(pageNumber === 2){

        birthdayMusic.currentTime = 0;
        birthdayMusic.play();

    }

    if(pageNumber === 3){

        birthdayMusic.pause();

        untilMusic.currentTime = 0;
        untilMusic.play();

    }

    if(pageNumber === 4){

        untilMusic.pause();

    }

}

const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg"
];

const photo = document.getElementById("photo");

let index = 0;

setInterval(() => {

    if(document.getElementById("page4").classList.contains("active")) {

        photo.style.opacity = 0;

        setTimeout(() => {

            index++;

            if(index >= photos.length){
                index = 0;
            }

            photo.src = photos[index];

            photo.style.opacity = 1;

        },500);

    }

},3000);
const canvas = document.getElementById("fireworks");

if(canvas){

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    function createFirework() {

        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height / 2;

        for (let i = 0; i < 50; i++) {

            particles.push({
                x,
                y,
                radius: 2,
                dx: (Math.random() - 0.5) * 8,
                dy: (Math.random() - 0.5) * 8,
                alpha: 1
            });

        }
    }

    function animate() {

        ctx.clearRect(0,0,canvas.width,canvas.height);

        particles.forEach((p,index)=>{

            p.x += p.dx;
            p.y += p.dy;
            p.alpha -= 0.01;

            ctx.beginPath();
            ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
            ctx.fillStyle = `rgba(255,215,0,${p.alpha})`;
            ctx.fill();

            if(p.alpha <= 0){
                particles.splice(index,1);
            }

        });

        requestAnimationFrame(animate);
    }

    setInterval(createFirework,1000);
    animate();

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}
