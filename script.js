let darkMode = localStorage.getItem("darkMode");
const themeToggle = document.getElementById("toggle");

if(darkMode === "active"){
    enableDarkMode();
}

themeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode")
    darkMode !== "active" ? enableDarkMode() : disableDarkMode();
})

function enableDarkMode(){
    document.body.classList.add("dark-theme");
    localStorage.setItem("darkMode", "active");
}

function disableDarkMode(){
    document.body.classList.remove("dark-theme");
    localStorage.setItem("darkMode", null);
}

