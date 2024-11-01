create database lista_de_magias;
use lista_de_magias;
CREATE TABLE magias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    nivel INT,
    escola VARCHAR(100),
    componentes VARCHAR(255),
    tempo_conjuracao VARCHAR(100),
    duracao VARCHAR(100),
    descricao TEXT
);
