<?php
include 'conexao.php';

// Verifica se todos os dados necessários foram enviados pelo formulário
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['nome'];
    $tipo = $_POST['tipo'];
    $nivel = $_POST['nivel'];
    $componentes = $_POST['componentes'];
    $descricao = $_POST['descricao'];

    // Prepara a query de inserção
    $sql = "INSERT INTO magias (nome, tipo, nivel, componentes, descricao)
            VALUES (?, ?, ?, ?, ?)";

    // Prepara e executa a inserção para evitar SQL Injection
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssiss", $nome, $tipo, $nivel, $componentes, $descricao);

    if ($stmt->execute()) {
        echo "Magia inserida com sucesso!";
    } else {
        echo "Erro ao inserir a magia: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
