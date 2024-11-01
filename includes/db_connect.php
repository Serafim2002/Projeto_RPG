<?php
// Configurações do banco de dados
$host = 'localhost'; // Ou o endereço do servidor MySQL
$dbname = 'lista_de_magias'; // O nome do seu banco de dados
$username = 'root'; // O nome de usuário do banco de dados
$password = '1234'; // A senha do banco de dados

try {
    // Criar uma nova conexão PDO
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    
    // Configurar o modo de erro PDO para exceções
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Opcional: definir a codificação de caracteres
    $conn->exec("set names utf8");
    
} catch (PDOException $e) {
    // Caso haja erro na conexão, exibir mensagem
    echo "Erro na conexão: " . $e->getMessage();
    die(); // Encerra a execução do script em caso de erro
}
?>
