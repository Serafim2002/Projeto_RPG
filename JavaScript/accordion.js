function toggleAccordion(element) {
    const content = element.nextElementSibling;
    content.style.display = content.style.display === "none" ? "block" : "none";
}
