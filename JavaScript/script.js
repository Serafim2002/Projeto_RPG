// Função p trocar entre tema Claro e Escuro
document.addEventListener('DOMContentLoaded', () => {
    const lightModeBtn = document.getElementById('light-mode-btn');
    const darkModeBtn = document.getElementById('dark-mode-btn');
    const systemModeBtn = document.getElementById('system-mode-btn');

    const lightModeStyles = document.getElementById('light-mode');
    const darkModeStyles = document.getElementById('dark-mode');

    // Funções p alternar modos e ícones
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
            lightModeBtn.style.display = 'inline'; // Muda p o ícone de modo claro
        } else {
            lightModeStyles.disabled = false;
            darkModeStyles.disabled = true;
            lightModeBtn.style.display = 'none';
            darkModeBtn.style.display = 'inline'; // Muda p o ícone de modo escuro
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



// Função p mostrar o botão quando a página for rolada p baixo
window.onscroll = function() { toggleButtonVisibility() }; // Quando o usuário rola a página, chama a função toggleButtonVisibility()

function toggleButtonVisibility() {
    const btn = document.getElementById("backToTopBtn"); // Seleciona o botão

    // Exibe o botão se o usuário rolou mais de 20px p baixo
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none"; // Oculta o botão se o usuário está no topo
    }
}

// Função p rolar suavemente até o topo
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'}); // Rola a página até o topo suavemente
}



// Função p abrir um popup estilo Wikipedia
function showPopup(event, table) {
    const popupOverlay = document.getElementById("popup");
    const popupIframe = document.getElementById("popup-iframe");

    // Define o src do iFrame para a página da classe selecionada
    popupIframe.src = `./tabelas/${table}`;

    // Posiciona o popup próximo ao ponteiro do mouse
    popupOverlay.style.left = event.pageX + 10 + 'px';
    popupOverlay.style.top = event.pageY + 10 + 'px';

    // Exibe o popup
    popupOverlay.style.display = "block";
}

function hidePopup() {
    const popupOverlay = document.getElementById("popup");
    const popupIframe = document.getElementById("popup-iframe");

    // Oculta o popup
    popupOverlay.style.display = "none";

    // Limpa o src do iFrame para interromper o carregamento da página anterior
    popupIframe.src = "";
}



// Função p abrir um popup na tela, como se fosse uma "subpágina"
function openPopup(page) {
    const popupOverlay = document.getElementById("popup");
    const popupIframe = document.getElementById("popup-iframe");

    // Define o src do iFrame para a página da classe selecionada
    popupIframe.src = `./classesDnD/${page}`;
    
    // Exibe o pop-up
    popupOverlay.style.display = "flex";
}

function closePopup() {
    const popupOverlay = document.getElementById("popup");
    const popupIframe = document.getElementById("popup-iframe");

    // Oculta o pop-up
    popupOverlay.style.display = "none";

    // Limpa o src do iFrame para interromper o carregamento da página anterior
    popupIframe.src = "";
}

// Função p Abrir e Fechar os Cards das Classes
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    content.style.display = content.style.display === "none" ? "block" : "none"; // Alterna entre abrir e fechar
}