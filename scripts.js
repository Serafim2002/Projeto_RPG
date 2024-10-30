document.addEventListener('DOMContentLoaded', () => {
    const lightModeBtn = document.getElementById('light-mode-btn');
    const darkModeBtn = document.getElementById('dark-mode-btn');
    const systemModeBtn = document.getElementById('system-mode-btn');

    const lightModeStyles = document.getElementById('light-mode');
    const darkModeStyles = document.getElementById('dark-mode');

    // Funções para alternar modos e ícones
    lightModeBtn.addEventListener('click', () => {
        lightModeStyles.disabled = false;
        darkModeStyles.disabled = true;
        localStorage.setItem('theme', 'light');

        // Troca de ícones
        lightModeBtn.style.display = 'none';
        darkModeBtn.style.display = 'inline'; // Mostra o botão de modo escuro
    });

    darkModeBtn.addEventListener('click', () => {
        lightModeStyles.disabled = true;
        darkModeStyles.disabled = false;
        localStorage.setItem('theme', 'dark');

        // Troca de ícones
        darkModeBtn.style.display = 'none';
        lightModeBtn.style.display = 'inline'; // Mostra o botão de modo claro
    });

    systemModeBtn.addEventListener('click', () => {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDarkScheme) {
            lightModeStyles.disabled = true;
            darkModeStyles.disabled = false;
            darkModeBtn.style.display = 'none';
            lightModeBtn.style.display = 'inline'; // Muda para o ícone de modo claro
        } else {
            lightModeStyles.disabled = false;
            darkModeStyles.disabled = true;
            lightModeBtn.style.display = 'none';
            darkModeBtn.style.display = 'inline'; // Muda para o ícone de modo escuro
        }
        localStorage.removeItem('theme');
    });

    // Aplicar tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        lightModeStyles.disabled = true;
        darkModeStyles.disabled = false;
        lightModeBtn.style.display = 'inline'; // Exibe o botão de modo claro
        darkModeBtn.style.display = 'none'; // Oculta o botão de modo escuro
    } else if (savedTheme === 'light') {
        lightModeStyles.disabled = false;
        darkModeStyles.disabled = true;
        lightModeBtn.style.display = 'none'; // Oculta o botão de modo claro
        darkModeBtn.style.display = 'inline'; // Exibe o botão de modo escuro
    } else {
        systemModeBtn.click(); // Aplica o modo do sistema se não houver tema salvo
    }
});
