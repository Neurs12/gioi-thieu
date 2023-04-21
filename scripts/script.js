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
    var mColor = document.getElementsByClassName("page-view")[page].getAttribute("mouseColor");
    mouse.style.backgroundColor = mColor;
    mouseOutline.style.border = `solid 4px ${mColor}`;
    if (!pageLoaded[page]) {
        setTimeout(() => InView(page - 1), 500);
        pageLoaded[page] = true;
    }
}

function InView(index) {
    var titleView = document.getElementsByClassName("title")[index];
    titleView.classList.add("fade-ani-in");
    randomTextFlyer(titleView, titleView.getAttribute("targetText"));
    setTimeout(() => document.getElementsByClassName(`famous-quote`)[index].classList.add("fade-ani-in"), 500);

    var picks = document.getElementsByClassName("overview-cards")[index].children;
    for (let i = 0; i < picks.length; i++) {
        setTimeout(() => picks[i].classList.add("slide-in"), 800 - (i * 100));
    }

    setTimeout(() => document.getElementsByClassName("description")[index].classList.add("slide-in"), 900);

    var stats = document.getElementsByClassName("stats")[index].children;
    for (let i = 0; i < stats.length; i++) {
        setTimeout(() => stats[i].classList.add("fade-ani-in"), 1000 + (i * 100));
    }

    console.log(stats[1].children[0]);

    setTimeout(() => stats[1].children[0].style.width = `calc(${parseInt(stats[1].children[0].getAttribute("percent")) * 20 / 100}vw + 18px)`, 1600);
    setTimeout(() => stats[3].children[0].style.width = `calc(${parseInt(stats[3].children[0].getAttribute("percent")) * 20 / 100}vw + 18px)`, 1700);
    setTimeout(() => stats[5].children[0].style.width = `calc(${parseInt(stats[5].children[0].getAttribute("percent")) * 20 / 100}vw + 18px)`, 1800);
}