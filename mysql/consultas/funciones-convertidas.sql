SELECT current_timestamp() AS RESULTADO;

SELECT CONCAT("La fecha y la hora de hoy son: ", current_timestamp());

SELECT CONCAT("La fecha y la hora de hoy son: ", DATE_FORMAT(current_timestamp(), "%W, %d/%m/%Y a las %T")) AS RESULTADO;

SELECT CONVERT(23.45, CHAR) AS RESULTADO;

SELECT SUBSTRING(CONVERT(23.45,CHAR),3,1) AS RESULTADO;
