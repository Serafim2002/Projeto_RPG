<?php
include 'conexao.php';

$sql = "SELECT nome, tipo, nivel, componentes, descricao FROM magias";
$result = $conn->query($sql);

$magias = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $magias[] = $row;
    }
}

$conn->close();

// Retorna o array de magias como JSON
header('Content-Type: application/json');
echo json_encode($magias);
?>
