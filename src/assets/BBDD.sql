-- Crear la base de datos
CREATE DATABASE TiendaInformatica;
USE TiendaInformatica;

-- Tabla Usuarios
CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(150) UNIQUE NOT NULL,
    contrasenia VARCHAR(255) NOT NULL,
    creado_en DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla Categorías
CREATE TABLE Categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE NOT NULL,
    imagen VARCHAR(255),
    descripcion TEXT
);

-- Tabla Productos
CREATE TABLE Productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    valoracion DECIMAL(3,2) DEFAULT 0.0,
    imagen VARCHAR(255),
    categoria_id INT NOT NULL,
    FOREIGN KEY (categoria_id) REFERENCES Categorias(id) ON DELETE CASCADE
);

-- Tabla Opiniones
CREATE TABLE Opiniones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    comentario TEXT NOT NULL,
    valoracion INT CHECK (valoracion BETWEEN 1 AND 5) NOT NULL,
    producto_id INT NOT NULL,
    FOREIGN KEY (producto_id) REFERENCES Productos(id) ON DELETE CASCADE
);

-- Tabla Carrito
CREATE TABLE Carrito (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT UNIQUE NOT NULL,
    creado_en DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id) ON DELETE CASCADE
);

-- Tabla Productos en Carrito (1:N)
CREATE TABLE Productos_Carrito (
    id INT AUTO_INCREMENT PRIMARY KEY,
    carrito_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad INT DEFAULT 1 NOT NULL,
    FOREIGN KEY (carrito_id) REFERENCES Carrito(id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES Productos(id) ON DELETE CASCADE
);
