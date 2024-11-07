// Função para carregar a lista de magias do banco de dados
async function carregarMagias() {
    try {
        // Realiza a requisição para buscar as magias
        const response = await fetch('../PHP/buscar_magias.php');
        
        // Converte a resposta para JSON
        const magias = await response.json();

        // Seleciona a lista onde as magias serão exibidas
        const lista = document.getElementById('lista-magias');
        lista.innerHTML = ''; // Limpa a lista antes de adicionar novas magias

        // Percorre cada magia e cria um item na lista
        magias.forEach(magia => {
            const item = document.createElement('li');
            item.innerHTML = `
                <strong>Nome:</strong> ${magia.nome}<br>
                <strong>Tipo:</strong> ${magia.tipo}<br>
                <strong>Nível:</strong> ${magia.nivel}<br>
                <strong>Componentes:</strong> ${magia.componentes}<br>
                <strong>Descrição:</strong> ${magia.descricao}<br>
            `;
            lista.appendChild(item); // Adiciona o item à lista
        });
    } catch (error) {
        console.error('Erro ao carregar magias:', error);
    }
}

// Função para inserir uma nova magia no banco de dados
async function inserirMagia(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Cria um FormData com os dados do formulário
    const formData = new FormData(event.target);

    // Envia os dados para o script PHP usando o método POST
    const response = await fetch('../PHP/inserir_magia.php', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        alert('Magia inserida com sucesso!');
        carregarMagias(); // Recarrega a lista para mostrar a nova magia
        event.target.reset(); // Limpa o formulário após o envio
    } else {
        alert('Erro ao inserir a magia.');
    }
}

// Carrega a lista de magias quando a página é carregada
document.addEventListener('DOMContentLoaded', carregarMagias);
