function showPopup(event, table) {
    const popupOverlay = document.getElementById("popup");
    const popupIframe = document.getElementById("popup-iframe");

    popupIframe.src = `./tabelas/${table}`;
    popupOverlay.style.left = event.pageX + 10 + 'px';
    popupOverlay.style.top = event.pageY + 10 + 'px';
    popupOverlay.style.display = "block";
}

function hidePopup() {
    const popupOverlay = document.getElementById("popup");
    const popupIframe = document.getElementById("popup-iframe");

    popupOverlay.style.display = "none";
    popupIframe.src = "";
}

function openPopup(page) {
    const popupOverlay = document.getElementById("popup");
    const popupIframe = document.getElementById("popup-iframe");

    popupIframe.src = `./classesDnD/${page}`;
    popupOverlay.style.display = "flex";
}

function closePopup() {
    const popupOverlay = document.getElementById("popup");
    const popupIframe = document.getElementById("popup-iframe");

    popupOverlay.style.display = "none";
    popupIframe.src = "";
}
