SELECT * FROM tabla_de_productos;

SELECT * FROM tabla_de_productos WHERE SABOR = 'mango' AND TAMANO = '470 ml';

SELECT * FROM tabla_de_productos WHERE SABOR = 'mango' OR TAMANO = '470 ml';

SELECT * FROM tabla_de_productos WHERE NOT(SABOR = 'mango') OR TAMANO = '470 ml';

SELECT * FROM tabla_de_productos WHERE NOT(SABOR = 'mango' AND TAMANO = '470 ml');

SELECT * FROM tabla_de_productos WHERE SABOR = 'mango' AND NOT(TAMANO = '470 ml');

SELECT * FROM tabla_de_productos WHERE SABOR IN ('mango', 'uva');
SELECT * FROM tabla_de_productos WHERE SABOR = 'mango' OR 'uva';

SELECT * FROM tabla_de_clientes WHERE CIUDAD IN ('ciudad de mexico', 'guadalajara');

SELECT * FROM tabla_de_clientes WHERE CIUDAD IN ('ciudad de mexico', 'guadalajara') AND EDAD > 21;

SELECT * FROM tabla_de_clientes WHERE CIUDAD IN ('ciudad de mexico', 'guadalajara') AND (EDAD BETWEEN 20 AND 25);