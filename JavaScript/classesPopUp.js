function openPopup(event, table) {
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

function closePopup() {
    const popupOverlay = document.getElementById("popup");
    const popupIframe = document.getElementById("popup-iframe");

    // Oculta o popup
    popupOverlay.style.display = "none";

    // Limpa o src do iFrame para interromper o carregamento da página anterior
    popupIframe.src = "";
}
