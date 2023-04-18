let as = document.getElementsByClassName("page-view");
var pageLoaded = [];

var mouseOutline = document.getElementById("mouse-outline");
var mouse = document.getElementById("mouse");

for (var i = 0; i < as.length; i++) {
    as[i].style.top = `${i * 100}%`;
    document.getElementById("scroll-points").innerHTML += `<a onclick="jumpPageTo(${i});"><span class="dot"></span></a>`;
    pageLoaded.push(false);
}

let dots = document.getElementsByClassName("dot");

for (var i = 0; i < dots.length; i++) {
    openMouseOutlineListener(dots[i], 20);
}

var current_view = 0;
var ignore = false;

dots[current_view].classList.add("page-focus-dot");

window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0 && current_view + 1 < as.length && !ignore) {
        console.log("Tf?")
        ignore = true;
        setTimeout(() => {ignore = false}, 800);

        current_view++;

        dots[current_view-1].classList.remove("page-focus-dot");
        dots[current_view-1].classList.add("page-unfocus-dot");
        
        dots[current_view].classList.add("page-focus-dot");
        dots[current_view].classList.remove("page-unfocus-dot");

        document.getElementById("main-page").setAttribute("style", `transform: translateY(${-100 * current_view}vh);`);
        
        contextManager(current_view);
    }
    if (e.deltaY < 0 && current_view > 0 && !ignore) {
        console.log("Tf?")
        ignore = true;
        setTimeout(() => {ignore = false}, 800);

        current_view--;

        dots[current_view+1].classList.remove("page-focus-dot");
        dots[current_view+1].classList.add("page-unfocus-dot");

        dots[current_view].classList.add("page-focus-dot");
        dots[current_view].classList.remove("page-unfocus-dot");

        document.getElementById("main-page").setAttribute("style", `transform: translateY(${-100 * current_view}vh);`);

        contextManager(current_view);
    }
});

function jumpPageTo(page) {
    ignore = true;
    setTimeout(() => {ignore = false}, 800);
    
    current_view = page;

    for (var dot = 0; dot < dots.length; dot++) {
        dots[dot].classList.remove("page-focus-dot");
        dots[dot].classList.remove("page-unfocus-dot");
    }

    dots[page].classList.add("page-focus-dot");

    document.getElementById("main-page").setAttribute("style", `transform: translateY(${-100 * page}vh);`);

    contextManager(page);
}

window.addEventListener("mousemove", (e) => {
    mouseOutline.style.left = `${e.clientX}px`;
    mouseOutline.style.top = `${e.clientY}px`;
    mouse.style.left = `${e.clientX}px`;
    mouse.style.top = `${e.clientY}px`;
});

function contextManager(page) {
    if (page == 1) {
        mouse.style.backgroundColor = "#ffc0ad";
        mouseOutline.style.border = "solid 4px #ffc0ad";
        if (!pageLoaded[1]) {
            setTimeout(() => page1InView(), 500);
            pageLoaded[1] = true;
        }
    } if (page == 2) {
        mouse.style.backgroundColor = "#ff8ba7";
        mouseOutline.style.border = "solid 4px #ff8ba7";
        if (!pageLoaded[2]) {
            setTimeout(() => page2InView(), 500);
            pageLoaded[2] = true;
        }
    }
}

function page1InView() {
    var title = document.getElementById("thanphong");
    title.classList.add("fade-ani-in");
    randomTextFlyer(title, "Nguyễn Thần Phong");
    setTimeout(() => document.getElementById("famous-word-thanphong").classList.add("fade-ani-in"), 500);
    var picks = document.getElementsByClassName("pick-phong");
    setTimeout(() => picks[0].classList.add("slide-in"), 800);
    setTimeout(() => picks[1].classList.add("slide-in"), 700);
    setTimeout(() => picks[2].classList.add("slide-in"), 600);
    setTimeout(() => document.getElementsByClassName("description")[0].classList.add("slide-in"), 900);
    var stats = document.getElementsByClassName("stats")[0].children;
    setTimeout(() => stats[0].classList.add("fade-ani-in"), 1000);
    setTimeout(() => stats[1].classList.add("fade-ani-in"), 1100);
    setTimeout(() => stats[2].classList.add("fade-ani-in"), 1200);
    setTimeout(() => stats[3].classList.add("fade-ani-in"), 1300);
    setTimeout(() => stats[4].classList.add("fade-ani-in"), 1400);
    setTimeout(() => stats[5].classList.add("fade-ani-in"), 1500);
    setTimeout(() => document.getElementById("phong-close").style.width = `calc(20vw + 20px)`, 1600);
    setTimeout(() => document.getElementById("phong-passion").style.width = `calc(19vw + 20px)`, 1700);
    setTimeout(() => document.getElementById("phong-patience").style.width = `calc(12vw + 20px)`, 1800);
}
function page2InView() {
    var title = document.getElementById("haixoan");
    title.classList.add("fade-ani-in");
    randomTextFlyer(title, "Nguyễn Thị Hải Xoan");
    setTimeout(() => document.getElementById("famous-word-haixoan").classList.add("fade-ani-in"), 500);
    var picks = document.getElementsByClassName("pick-xoan");
    setTimeout(() => picks[0].classList.add("slide-in"), 800);
    setTimeout(() => picks[1].classList.add("slide-in"), 700);
    setTimeout(() => picks[2].classList.add("slide-in"), 600);
    setTimeout(() => document.getElementsByClassName("description")[1].classList.add("slide-in"), 900);
    var stats = document.getElementsByClassName("stats")[1].children;
    setTimeout(() => stats[0].classList.add("fade-ani-in"), 1000);
    setTimeout(() => stats[1].classList.add("fade-ani-in"), 1100);
    setTimeout(() => stats[2].classList.add("fade-ani-in"), 1200);
    setTimeout(() => stats[3].classList.add("fade-ani-in"), 1300);
    setTimeout(() => stats[4].classList.add("fade-ani-in"), 1400);
    setTimeout(() => stats[5].classList.add("fade-ani-in"), 1500);
    setTimeout(() => document.getElementById("xoan-close").style.width = `calc(19vw + 20px)`, 1600);
    setTimeout(() => document.getElementById("xoan-passion").style.width = `calc(20vw + 20px)`, 1700);
    setTimeout(() => document.getElementById("xoan-patience").style.width = `calc(16vw + 20px)`, 1800);
}