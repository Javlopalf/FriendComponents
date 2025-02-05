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

CREATE TABLE Opiniones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    comentario TEXT NOT NULL,
    valoracion INT NOT NULL,
    producto_id INT NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
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

-- Insertar categorías
INSERT INTO Categorias (nombre, imagen, descripcion) VALUES
('Programas', '../../assets/images/windowsP.jpg', 'Categoría de software y licencias'),
('Móviles', '../../assets/images/movilesP.jpg', 'Smartphones de última generación'),
('Placas Bases', '../../assets/images/placabaseP.jpg', 'Placas base para PCs'),
('Procesadores', '../../assets/images/procesadorP.jpg', 'Procesadores para equipos avanzados'),
('Ventiladores', '../../assets/images/ventilador2P.jpg', 'Ventiladores y disipadores de CPU'),
('Memoria RAM', '../../assets/images/ramP.jpg', 'Módulos de memoria RAM DDR4 y más'),
('Refrigeración líquida', '../../assets/images/refrigeracionP.jpg', 'Sistemas de refrigeración líquida'),
('Fuentes de alimentación', '../../assets/images/fuente.jpg', 'Fuentes de alimentación eficientes'),
('Torres', '../../assets/images/torre17.jpg', 'Cajas para ensamblar tu PC'),
('Monitores', '../../assets/images/monitor.jpg', 'Pantallas de alta calidad y resolución');


-- Insertar productos para cada categoría

-- Programas
INSERT INTO Productos (nombre, descripcion, precio, valoracion, imagen, categoria_id) VALUES
('Microsoft Windows 11 Pro', 'Licencia Permanente - Descarga Digital', 103.99, 4.8, '../../assets/images/productos/mcr11.jpg', 1),
('Microsoft Windows Server 2022 Standard', 'Descarga Digital', 89.99, 4.6, '../../assets/images/productos/mcr22.jpg', 1),
('Microsoft Windows Server 2019 Standard', 'Descarga Digital', 49.99, 4.5, '../../assets/images/productos/mcr19.jpg', 1);

-- Móviles
INSERT INTO Productos (nombre, descripcion, precio, valoracion, imagen, categoria_id) VALUES
('Samsung Galaxy S22', 'Smartphone Android 5G', 799.99, 4.7, '../../assets/images/productos/smsg22.jpg', 2),
('iPhone 13 Pro Max', 'Smartphone Apple con 5G', 1199.99, 4.9, '../../assets/images/productos/iphone13.jpg', 2),
('Xiaomi Mi 11 Ultra', 'Smartphone con cámara avanzada', 649.99, 4.8, '../../assets/images/productos/movil3.jpg', 2);

-- Placas Bases
INSERT INTO Productos (nombre, descripcion, precio, valoracion, imagen, categoria_id) VALUES
('ASUS ROG Strix B550-F', 'Placa base para procesadores AMD', 189.99, 4.7, '../../assets/images/productos/asus.jpg', 3),
('MSI MPG Z590', 'Placa base para procesadores Intel', 229.99, 4.6, '../../assets/images/productos/mpg.jpg', 3),
('Gigabyte X570 AORUS Elite', 'Compatible con PCIe 4.0', 169.99, 4.5, '../../assets/images/productos/placaBase3.jpg', 3);

-- Procesadores
INSERT INTO Productos (nombre, descripcion, precio, valoracion, imagen, categoria_id) VALUES
('Samsung 970 EVO Plus', 'Disco SSD NVMe 1TB', 99.99, 4.9, '../../assets/images/productos/disco1.jpg', 4),
('Crucial MX500', 'Disco SSD SATA 500GB', 69.99, 4.8, '../../assets/images/productos/disco2.jpg', 4),
('WD Black SN850', 'Disco SSD NVMe 2TB', 149.99, 4.7, '../../assets/images/productos/disco3.jpg', 4);

-- Ventiladores
INSERT INTO Productos (nombre, descripcion, precio, valoracion, imagen, categoria_id) VALUES
('Cooler Master Hyper 212', 'Disipador de CPU con ventilador', 39.99, 4.6, '../../assets/images/productos/ventilador1.jpg', 5),
('Noctua NH-D15', 'Disipador de alta eficiencia', 89.99, 4.9, '../../assets/images/productos/ventilador2.jpg', 5),
('Corsair iCUE SP120', 'Ventilador RGB para cajas de PC', 29.99, 4.7, '../../assets/images/productos/ventilador3.jpg', 5);

-- Memoria RAM
INSERT INTO Productos (nombre, descripcion, precio, valoracion, imagen, categoria_id) VALUES
('Corsair Vengeance LPX 16GB', 'DDR4 3200MHz', 79.99, 4.8, '../../assets/images/productos/RAM1.jpg', 6),
('G.Skill Trident Z RGB 32GB', 'DDR4 3600MHz con iluminación RGB', 189.99, 4.9, '../../assets/images/productos/RAM2.jpg', 6),
('Kingston Fury Beast 16GB', 'DDR4 3200MHz', 74.99, 4.7, '../../assets/images/productos/RAM3.jpg', 6);

-- Refrigeración líquida
INSERT INTO Productos (nombre, descripcion, precio, valoracion, imagen, categoria_id) VALUES
('NZXT Kraken X63', 'Kit de refrigeración líquida con iluminación RGB', 149.99, 4.8, '../../assets/images/productos/REF1.jpg', 7),
('Corsair Hydro Series H100i', 'Refrigeración líquida de alto rendimiento', 129.99, 4.7, '../../assets/images/productos/REF2.jpg', 7),
('Cooler Master MasterLiquid ML240L', 'Sistema de refrigeración líquida asequible', 89.99, 4.6, '../../assets/images/productos/REF3.jpg', 7);

-- Fuentes de alimentación
INSERT INTO Productos (nombre, descripcion, precio, valoracion, imagen, categoria_id) VALUES
('Corsair RM850x', 'Fuente de alimentación modular 80+ Gold', 149.99, 4.8, '../../assets/images/productos/FA1.jpg', 8),
('EVGA SuperNOVA 750 G5', 'Fuente de alimentación 80+ Gold', 129.99, 4.7, '../../assets/images/productos/FA2.jpg', 8),
('Thermaltake Smart 500W', 'Fuente de alimentación básica', 49.99, 4.5, '../../assets/images/productos/FA3.jpg', 8);

-- Torres
INSERT INTO Productos (nombre, descripcion, precio, valoracion, imagen, categoria_id) VALUES
('NZXT H510', 'Caja compacta con diseño minimalista', 79.99, 4.7, '../../assets/images/productos/Torre1.jpg', 9),
('Corsair iCUE 4000X RGB', 'Caja con iluminación RGB', 129.99, 4.8, '../../assets/images/productos/Torre2.jpg', 9),
('Cooler Master MasterBox Q300L', 'Caja económica y compacta', 49.99, 4.6, '../../assets/images/productos/Torre3.jpg', 9);

-- Monitores
INSERT INTO Productos (nombre, descripcion, precio, valoracion, imagen, categoria_id) VALUES
('Dell UltraSharp U2723QE', 'Monitor 4K UHD de 27 pulgadas', 649.99, 4.9, '../../assets/images/productos/Monitor1.jpg', 10),
('LG 27GN950-B', 'Monitor gaming 4K con 144Hz', 749.99, 4.8, '../../assets/images/productos/Monitor2.jpg', 10),
('AOC C24G1A', 'Monitor curvo Full HD de 24 pulgadas', 199.99, 4.7, '../../assets/images/productos/Monitor3.jpg', 10);


-- Insertar usuarios
INSERT INTO Usuarios (nombre, correo, contrasenia, creado_en) VALUES
('Juan Pérez', 'javier2@gmail.com', 'Javier200', NOW()),
('Maria López', 'maria.lopez@example.com', 'contraseña456', NOW()),
('Carlos García', 'carlos.garcia@example.com', 'contraseña789', NOW()),
('Ana Fernández', 'ana.fernandez@example.com', 'contraseña101', NOW()),
('Pedro Martínez', 'pedro.martinez@example.com', 'contraseña112', NOW());

-- Insertar opiniones para los productos de la categoría 'Programas'
INSERT INTO Opiniones (producto_id, nombre, comentario, valoracion, fecha) VALUES
(1, 'Juan Pérez', 'Excelente sistema operativo, muy estable y rápido.', 5, NOW()),
(1, 'Carlos García', 'Buen rendimiento, aunque el precio es alto.', 4, NOW()),
(2, 'Ana Fernández', 'Perfecto para servidores, fácil de instalar.', 5, NOW()),
(2, 'Pedro Martínez', 'Requiere mucha configuración, pero funciona bien.', 4, NOW()),
(3, 'Maria López', 'Buen sistema operativo, aunque algo antiguo.', 3, NOW()),
(3, 'Carlos García', 'Cumple su función, pero podría ser más rápido.', 4, NOW()),

-- Insertar opiniones para los productos de la categoría 'Móviles'
(4, 'Juan Pérez', 'Gran smartphone, la cámara es impresionante.', 5, NOW()),
(4, 'Pedro Martínez', 'Buena calidad, pero el precio es elevado.', 4, NOW()),
(5, 'Carlos García', 'El mejor iPhone que he tenido, la cámara es increíble.', 5, NOW()),
(5, 'Ana Fernández', 'Muy caro, pero la calidad es innegable.', 4, NOW()),
(6, 'Maria López', 'Buen rendimiento y excelente cámara, pero la pantalla es pequeña.', 4, NOW()),
(6, 'Pedro Martínez', 'Muy buen teléfono, pero la batería podría durar más.', 4, NOW()),

-- Insertar opiniones para los productos de la categoría 'Placas Bases'
(7, 'Juan Pérez', 'Excelente para jugar y trabajar, compatible con todos los procesadores AMD.', 5, NOW()),
(7, 'Carlos García', 'Placa base de calidad, pero algo cara.', 4, NOW()),
(8, 'Ana Fernández', 'Placa base sólida, perfecta para procesadores Intel.', 5, NOW()),
(8, 'Pedro Martínez', 'Buen rendimiento, pero las opciones de expansión son limitadas.', 4, NOW()),
(9, 'Maria López', 'Buena placa, pero no es compatible con algunos dispositivos nuevos.', 3, NOW()),
(9, 'Carlos García', 'Cumple su función, pero el precio podría ser más competitivo.', 4, NOW()),

-- Insertar opiniones para los productos de la categoría 'Procesadores'
(10, 'Juan Pérez', 'Excelente rendimiento y velocidad, ideal para gaming.', 5, NOW()),
(10, 'Pedro Martínez', 'Rendimiento espectacular, pero un poco caro.', 4, NOW()),
(11, 'Carlos García', 'Buen rendimiento, pero no se nota mucha diferencia con modelos anteriores.', 3, NOW()),
(11, 'Ana Fernández', 'Muy buena opción para sistemas de trabajo, muy rápido.', 4, NOW()),
(12, 'Maria López', 'Rendimiento top, aunque necesita una placa base compatible.', 5, NOW()),
(12, 'Pedro Martínez', 'Muy buen procesador, pero el precio es un poco alto.', 4, NOW()),

-- Insertar opiniones para los productos de la categoría 'Ventiladores'
(13, 'Juan Pérez', 'Muy eficiente para mantener mi PC frío, fácil de instalar.', 5, NOW()),
(13, 'Carlos García', 'Buen ventilador, aunque es un poco ruidoso.', 4, NOW()),
(14, 'Ana Fernández', 'Increíble disipación de calor, lo recomiendo para sistemas de alto rendimiento.', 5, NOW()),
(14, 'Pedro Martínez', 'Excelente disipador, aunque el tamaño es grande.', 4, NOW()),
(15, 'Maria López', 'Buen ventilador, aunque no es tan silencioso como esperaba.', 3, NOW()),
(15, 'Carlos García', 'Muy bueno, pero podría ser más barato.', 4, NOW()),

-- Insertar opiniones para los productos de la categoría 'Memoria RAM'
(16, 'Juan Pérez', 'Gran memoria, mejora considerablemente el rendimiento del sistema.', 5, NOW()),
(16, 'Pedro Martínez', 'Buen precio, pero hay opciones con mayor capacidad.', 4, NOW()),
(17, 'Carlos García', 'Perfecta para juegos y multitarea, la iluminación RGB es genial.', 5, NOW()),
(17, 'Ana Fernández', 'Mejor memoria que he probado, vale la pena el precio.', 4, NOW()),
(18, 'Maria López', 'Memoria de calidad, pero un poco más lenta que otras opciones de la competencia.', 3, NOW()),
(18, 'Pedro Martínez', 'Buena opción por el precio, aunque podría ser más rápida.', 4, NOW()),

-- Insertar opiniones para los productos de la categoría 'Refrigeración líquida'
(19, 'Juan Pérez', 'Refrigeración excelente, mantiene el CPU a temperaturas bajas todo el tiempo.', 5, NOW()),
(19, 'Carlos García', 'Muy eficiente, pero el precio es bastante elevado.', 4, NOW()),
(20, 'Ana Fernández', 'Refrigeración líquida de alto rendimiento, fácil de instalar.', 5, NOW()),
(20, 'Pedro Martínez', 'Es muy silenciosa, aunque un poco cara para lo que ofrece.', 4, NOW()),
(21, 'Maria López', 'Buena opción para refrigerar, pero la instalación es algo complicada.', 3, NOW()),
(21, 'Carlos García', 'Excelente relación calidad-precio, muy recomendable.', 4, NOW()),

-- Insertar opiniones para los productos de la categoría 'Fuentes de alimentación'
(22, 'Juan Pérez', 'Muy buena fuente de alimentación, segura y con gran capacidad.', 5, NOW()),
(22, 'Carlos García', 'Muy buena, pero algo cara en comparación con otras marcas.', 4, NOW()),
(23, 'Ana Fernández', 'Fuente potente y eficiente, ideal para PC gaming.', 5, NOW()),
(23, 'Pedro Martínez', 'Buen rendimiento, pero la gestión de cables podría mejorar.', 4, NOW()),
(24, 'Maria López', 'Suficiente para sistemas básicos, pero podría tener más potencia.', 3, NOW()),
(24, 'Carlos García', 'Buen rendimiento, aunque se puede encontrar algo más barato.', 4, NOW()),

-- Insertar opiniones para los productos de la categoría 'Torres'
(25, 'Juan Pérez', 'Estéticamente bonita, buen espacio para componentes.', 5, NOW()),
(25, 'Carlos García', 'Buen diseño, pero los cables podrían estar mejor organizados.', 4, NOW()),
(26, 'Ana Fernández', 'Gran caja, con mucho espacio y una excelente ventilación.', 5, NOW()),
(26, 'Pedro Martínez', 'Buen precio, pero el montaje es complicado.', 4, NOW()),
(27, 'Maria López', 'Caja económica, pero no tiene tantas opciones de expansión.', 3, NOW()),
(27, 'Carlos García', 'Cumple su función, aunque podría mejorar el flujo de aire.', 4, NOW()),

-- Insertar opiniones para los productos de la categoría 'Monitores'
(28, 'Juan Pérez', 'Excelente monitor 4K, ideal para trabajar y jugar.', 5, NOW()),
(28, 'Carlos García', 'La resolución es increíble, pero la tasa de refresco podría ser mejor.', 4, NOW()),
(29, 'Ana Fernández', 'Un monitor impresionante para gaming, la calidad de la imagen es asombrosa.', 5, NOW()),
(29, 'Pedro Martínez', 'La frecuencia de actualización es excelente, aunque el precio es alto.', 4, NOW()),
(30, 'Maria López', 'Un monitor muy bueno para trabajos gráficos, pero la pantalla curva no es de mi gusto.', 3, NOW()),
(30, 'Carlos García', 'Buen monitor para la oficina, pero la calidad de la pantalla podría mejorar.', 4, NOW());


-- Elimina las tablas en el orden que prefieras, ya que las restricciones están desactivadas
DROP TABLE IF EXISTS Productos_Carrito;
DROP TABLE IF EXISTS Carrito;
DROP TABLE IF EXISTS Opiniones;
DROP TABLE IF EXISTS Productos;
DROP TABLE IF EXISTS Categorias;
DROP TABLE IF EXISTS Usuarios;
