SELECT DISTINCT BARRIO FROM tabla_de_clientes;

SELECT DISTINCT BARRIO FROM tabla_de_vendedores;

SELECT DISTINCT BARRIO FROM tabla_de_clientes UNION SELECT DISTINCT BARRIO FROM tabla_de_vendedores;

SELECT DISTINCT BARRIO FROM tabla_de_clientes UNION ALL SELECT DISTINCT BARRIO FROM tabla_de_vendedores;

SELECT DISTINCT BARRIO, NOMBRE, 'Cliente' AS TIPO_CLIENTE FROM tabla_de_clientes UNION SELECT DISTINCT BARRIO, NOMBRE, 'Vendedor' AS TIPO_VENDEDOR FROM tabla_de_vendedores;

SELECT DISTINCT BARRIO, NOMBRE, 'Cliente' AS TIPO_CLIENTE, DNI FROM tabla_de_clientes UNION SELECT DISTINCT BARRIO, NOMBRE, 'Vendedor' AS TIPO_VENDEDOR, MATRICULA FROM tabla_de_vendedores;

SELECT tabla_de_clientes.NOMBRE AS CLIENTES, tabla_de_clientes.CIUDAD, tabla_de_clientes.BARRIO, tabla_de_vendedores.NOMBRE AS VENDEDORES, tabla_de_vendedores.VACACIONES FROM tabla_de_clientes LEFT JOIN tabla_de_vendedores ON tabla_de_clientes.BARRIO = tabla_de_vendedores.BARRIO 
UNION 
SELECT tabla_de_clientes.NOMBRE AS CLIENTES, tabla_de_clientes.CIUDAD, tabla_de_clientes.BARRIO, tabla_de_vendedores.NOMBRE AS VENDEDORES, tabla_de_vendedores.VACACIONES FROM tabla_de_clientes RIGHT JOIN tabla_de_vendedores ON tabla_de_clientes.BARRIO = tabla_de_vendedores.BARRIO;