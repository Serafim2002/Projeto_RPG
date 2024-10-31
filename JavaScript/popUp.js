function openPopup(item) {
    const titleElement = document.getElementById("popup-title");
    const descriptionElement = document.getElementById("popup-description");
    
    // Conteúdo dos itens
    switch (item) {
        case 'artificer':
            titleElement.innerText = 'Artífice';
            descriptionElement.innerText = 'Inventor que combina magia e tecnologia para criar engenhocas magicas.';
            break;
        case 'barbarian':
            titleElement.innerText = 'Bárbaro';
            descriptionElement.innerText = 'Guerreiro feroz que canaliza sua raiva em poder de combate e resistência.';
            break;
        case 'bard':
            titleElement.innerText = 'Bardo';
            descriptionElement.innerText = 'Músico e contador de histórias que usa magia e habilidades sociais para inspirar e enganar.';
            break;
        case 'warlock':
            titleElement.innerText = 'Bruxo';
            descriptionElement.innerText = 'Conjurador que obtém poderes mágicos através de um pacto com uma entidade sobrenatural, utilizando feitiços e habilidades únicas.';
            break;
        case 'cleric':
            titleElement.innerText = 'Clérigo';
            descriptionElement.innerText = 'Devoto de uma divindade que utiliza magia divina para curar, proteger e combater o mal.';
            break;
        case 'druid':
            titleElement.innerText = 'Druida';
            descriptionElement.innerText = 'Guardião da natureza que pode se transformar em animais e conjurar feitiços relacionados à terra.';
            break;
        case 'sorcerer':
            titleElement.innerText = 'Feiticeiro';
            descriptionElement.innerText = 'Conjurador que utiliza a magia inata e poderosa de sua linhagem ou experiências pessoais.';
            break;
        case 'fighter':
            titleElement.innerText = 'Guerreiro';
            descriptionElement.innerText = 'Lutador versátil e habilidoso em combate corpo a corpo e com armas, podendo se especializar em diversas táticas.';
            break;
        case 'monk':
            titleElement.innerText = 'Monge';
            descriptionElement.innerText = 'Mestre da disciplina física e espiritual, canalizando energia para feitos extraordinários em combate.';
            break;
        case 'rogue':
            titleElement.innerText = 'Ladino';
            descriptionElement.innerText = 'Mestre do furtos e truques que utiliza astúcia e habilidades para se infiltrar, desarmar armadilhas e atacar de surpresa.';
            break;
        case 'mage':
            titleElement.innerText = 'Mago';
            descriptionElement.innerText = 'Estudioso da magia que lança feitiços variados usando grimórios e a inteligência como base.';
            break;
        case 'paladin':
            titleElement.innerText = 'Paladino';
            descriptionElement.innerText = 'Guerreiro sagrado que combate o mal com a força e a fé, usando magia divina para proteger e curar.';
            break;
        case 'ranger':
            titleElement.innerText = 'Patrulheiro';
            descriptionElement.innerText = 'Caçador e aventureiro ágil que utiliza habilidades de sobrevivência e combate à distância para explorar e se adaptar a diferentes ambientes.';
            break;
        default:
            titleElement.innerText = 'Item Desconhecido';
            descriptionElement.innerText = 'Descrição não encontrada.';
            break;
    }
    
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
