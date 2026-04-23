// Переключение тем
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// Навигация вкладок
const tabButtons = document.querySelectorAll(".tab-btn");
const tasksPanel = document.getElementById("tasks-panel");
const mapPanel = document.getElementById("map-panel");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const tab = btn.dataset.tab;
        if(tab === "tasks") {
            tasksPanel.style.display = "block";
            mapPanel.style.display = "flex";
        } else if(tab === "map") {
            tasksPanel.style.display = "block";
            mapPanel.style.display = "flex";
        } else {
            alert(`${tab} вкладка пока демо`);
        }
    });
});

// Перемещение карты (drag & pan)
const mapImg = document.getElementById("map-image");

let isDragging = false;
let startX, startY;

mapImg.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX - mapImg.offsetLeft;
    startY = e.clientY - mapImg.offsetTop;
    mapImg.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    mapImg.style.left = `${e.clientX - startX}px`;
    mapImg.style.top = `${e.clientY - startY}px`;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    mapImg.style.cursor = "grab";
});

// Масштабирование колесом мыши
mapImg.addEventListener("wheel", (e) => {
    e.preventDefault();
    const scale = Math.max(0.5, Math.min(3, mapImg.width / mapImg.naturalWidth + (e.deltaY * -0.001)));
    mapImg.style.width = `${scale * 100}%`;
});
