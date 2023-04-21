var mouseOutline = document.getElementById("mouse-outline");

function openMouseOutlineListener(element, wide) {
    element.addEventListener("mouseover", () => {
        mouseOutline.style.height = `${wide}px`;
        mouseOutline.style.width = `${wide}px`;
    });
    element.addEventListener("mouseout", () => {
        mouseOutline.style.width = "30px";
        mouseOutline.style.height = "30px";
    });
}

function openMouseOutline(wide) {
    mouseOutline.style.height = `${wide}px`;
    mouseOutline.style.width = `${wide}px`;
}

function closeMouseOutline() {
    mouseOutline.style.width = "30px";
    mouseOutline.style.height = "30px";
}