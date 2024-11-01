<<<<<<< Updated upstream:js/scripts.js
// scripts.js
=======
// Função para aplicar tema específico (claro ou escuro)
function applyTheme(theme) {
    const lightModeStyles = document.getElementById('light-mode');
    const darkModeStyles = document.getElementById('dark-mode');
    const lightModeBtn = document.getElementById('light-mode-btn');
    const darkModeBtn = document.getElementById('dark-mode-btn');

    if (theme === 'light') {
        lightModeStyles.disabled = false;
        darkModeStyles.disabled = true;
        lightModeBtn.style.display = 'none';
        darkModeBtn.style.display = 'inline';
    } else if (theme === 'dark') {
        lightModeStyles.disabled = true;
        darkModeStyles.disabled = false;
        darkModeBtn.style.display = 'none';
        lightModeBtn.style.display = 'inline';
    }
}

// Função para aplicar o tema do sistema
function applySystemTheme() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkScheme) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }
}

// Aplicar o tema salvo ou o do sistema antes de carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light' || savedTheme === 'dark') {
    applyTheme(savedTheme); // Aplica o tema salvo, se existir
} else {
    applySystemTheme(); // Caso contrário, usa o tema do sistema
}
>>>>>>> Stashed changes:JavaScript/themeToggle.js

document.addEventListener('DOMContentLoaded', () => {
    const lightModeBtn = document.getElementById('light-mode-btn');
    const darkModeBtn = document.getElementById('dark-mode-btn');

<<<<<<< Updated upstream:js/scripts.js
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
=======
    // Eventos dos botões para salvar escolha do usuário
    lightModeBtn.addEventListener('click', () => {
        applyTheme('light');
        localStorage.setItem('theme', 'light'); // Salva a preferência
    });

    darkModeBtn.addEventListener('click', () => {
        applyTheme('dark');
        localStorage.setItem('theme', 'dark'); // Salva a preferência
    });
>>>>>>> Stashed changes:JavaScript/themeToggle.js
});
