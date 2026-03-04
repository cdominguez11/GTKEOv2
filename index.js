// 1. Ask the user for their name
let userName = prompt("Hi! What is your name?");

// 2. If they didn't type anything or hit cancel, give them a default name
if (userName === null || userName === "") {
    userName = "Friend";
}

// 3. Get the current hour (0-23)
const hour = new Date().getHours();
let greetingMessage;

// 4. Logic: Decide which greeting to use based on the time
if (hour < 12) {
    greetingMessage = "Good morning";
} else if (hour < 18) {
    greetingMessage = "Good afternoon";
} else {
    greetingMessage = "Good evening";
}

// 5. Update the webpage with the personalized message
document.getElementById("greeting").innerHTML = greetingMessage + ", " + userName + "!<br>Welcome to my page";

// THEME: initialize and toggle dark mode
const themeButton = document.getElementById('theme-toggle');
function applyTheme(theme){
    document.documentElement.classList.toggle('dark-theme', theme === 'dark');
    if(themeButton){
        themeButton.textContent = theme === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode';
        themeButton.setAttribute('aria-pressed', theme === 'dark');
    }
    localStorage.setItem('theme', theme);
}

(function initTheme(){
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(saved || (prefersDark ? 'dark' : 'light'));
})();

if(themeButton){
    themeButton.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark-theme');
        applyTheme(isDark ? 'light' : 'dark');
    });
}



