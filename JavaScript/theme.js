document.addEventListener('DOMContentLoaded', () => {
    const lightModeBtn = document.getElementById('light-mode-btn');
    const darkModeBtn = document.getElementById('dark-mode-btn');

    const lightModeStyles = document.getElementById('light-mode');
    const darkModeStyles = document.getElementById('dark-mode');

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            lightModeStyles.disabled = true;
            darkModeStyles.disabled = false;
            lightModeBtn.style.display = 'inline';
            darkModeBtn.style.display = 'none';
        } else if (theme === 'light') {
            lightModeStyles.disabled = false;
            darkModeStyles.disabled = true;
            lightModeBtn.style.display = 'none';
            darkModeBtn.style.display = 'inline';
        } else {
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (prefersDarkScheme) {
                applyTheme('dark');
            } else {
                applyTheme('light');
            }
        }
    };

    lightModeBtn.addEventListener('click', () => {
        localStorage.setItem('theme', 'light');
        applyTheme('light');
    });

    darkModeBtn.addEventListener('click', () => {
        localStorage.setItem('theme', 'dark');
        applyTheme('dark');
    });

    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme);
});
