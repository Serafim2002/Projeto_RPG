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
