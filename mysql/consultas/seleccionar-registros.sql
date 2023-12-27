USE jugos_ventas;

SELECT * FROM tabla_de_clientes;

SELECT DNI, NOMBRE FROM tabla_de_clientes;

SELECT DNI AS IDENTIFICACION, NOMBRE AS CLIENTE FROM tabla_de_clientes;

SELECT * FROM tabla_de_productos;

SELECT * FROM tabla_de_productos WHERE SABOR = 'Uva';

SELECT * FROM tabla_de_productos WHERE ENVASE = 'botella pet';

SELECT * FROM tabla_de_productos WHERE PRECIO_DE_LISTA > 16;

SELECT * FROM tabla_de_productos WHERE PRECIO_DE_LISTA <= 17;

SELECT * FROM tabla_de_productos WHERE PRECIO_DE_LISTA BETWEEN 16 AND 16.02;
