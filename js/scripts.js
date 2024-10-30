// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const lightModeBtn = document.getElementById('light-mode-btn');
    const darkModeBtn = document.getElementById('dark-mode-btn');
    const systemModeBtn = document.getElementById('system-mode-btn');

    const lightModeStyles = document.getElementById('light-mode');
    const darkModeStyles = document.getElementById('dark-mode');

    // Funções para alternar modos
    lightModeBtn.addEventListener('click', () => {
        lightModeStyles.disabled = false;
        darkModeStyles.disabled = true;
        localStorage.setItem('theme', 'light'); // Salva o tema no localStorage
    });

    darkModeBtn.addEventListener('click', () => {
        lightModeStyles.disabled = true;
        darkModeStyles.disabled = false;
        localStorage.setItem('theme', 'dark'); // Salva o tema no localStorage
    });

    systemModeBtn.addEventListener('click', () => {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDarkScheme) {
            lightModeStyles.disabled = true;
            darkModeStyles.disabled = false;
        } else {
            lightModeStyles.disabled = false;
            darkModeStyles.disabled = true;
        }
        localStorage.removeItem('theme'); // Remove o tema do localStorage para aplicar o padrão do sistema
    });

    // Aplicar tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        lightModeStyles.disabled = true;
        darkModeStyles.disabled = false;
    } else if (savedTheme === 'light') {
        lightModeStyles.disabled = false;
        darkModeStyles.disabled = true;
    } else {
        // Aplica o modo do sistema se não houver tema salvo
        systemModeBtn.click();
    }
});
