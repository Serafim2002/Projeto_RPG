<?php
// Incluir o arquivo de conexão
include 'db_connect.php';

try {
    // Preparar a consulta SQL para buscar todas as magias
    $query = $conn->prepare("SELECT * FROM magias");
    $query->execute(); // Executar a consulta

    // Recuperar todas as magias como um array associativo
    $magias = $query->fetchAll(PDO::FETCH_ASSOC);

    // Retornar as magias em formato JSON
    echo json_encode($magias);

} catch (PDOException $e) {
    // Se houver um erro na consulta, exibir uma mensagem de erro
    echo json_encode(["error" => "Erro na consulta: " . $e->getMessage()]);
}
?>
