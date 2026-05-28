CREATE DATABASE ConnectPlusDB;
GO

USE ConnectPlusDB;
GO

-- Tabela de Tipos de Contato
CREATE TABLE TipoContato (
    IdTipoContato UNIQUEIDENTIFIER PRIMARY KEY DEFAULT ((NEWID())),
    Titulo VARCHAR(100) NOT NULL
);
GO

SELECT * FROM TipoContato

-- Tabela de Contatos
CREATE TABLE Contato (
    IdContato UNIQUEIDENTIFIER PRIMARY KEY DEFAULT ((NEWID())),
    Nome VARCHAR(255) NOT NULL,
    FormaContato VARCHAR(256) NOT NULL, -- telefone, email, etc
    Imagem VARCHAR(255), -- caminho da imagem salva
    IdTipoContato  UNIQUEIDENTIFIER FOREIGN KEY REFERENCES TipoContato(IdTipoContato)
);
GO

SELECT * FROM Contato