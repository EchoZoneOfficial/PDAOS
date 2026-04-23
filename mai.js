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
            mapPanel.style.display = "none";
        } else if(tab === "map") {
            tasksPanel.style.display = "none";
            mapPanel.style.display = "block";
        } else {
            // Остальные вкладки пока скрыты
            tasksPanel.style.display = "none";
            mapPanel.style.display = "none";
            alert(`${tab} вкладка пока демо`);
        }
    });
});

// Инициализация: показываем задачи по умолчанию
tasksPanel.style.display = "block";
mapPanel.style.display = "none";
