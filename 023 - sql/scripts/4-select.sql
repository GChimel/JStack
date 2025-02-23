\c live023

-- SELECT id, first_name AS "first Name", last_name AS "lastName" FROM customers;
-- SELECT * FROM customers;
-- SELECT * FROM orders;

-- SELECT * FROM customers 
-- ORDER BY id DESC;

-- SELECT * FROM customers 
-- ORDER BY first_name DESC, email ASC;

-- SELECT * FROM customers
-- ORDER BY id DESC
-- LIMIT 3;

-- SELECT * FROM customers
-- ORDER BY id
-- OFFSET 3 --OFFSET -> Ignora os 3 primeiros (utilizado para paginações)
-- ;

-- SELECT * FROM customers
-- WHERE id > 15 AND last_name='Doe-19'
-- ;

-- SELECT * FROM customers
-- WHERE id > 15 OR last_name='Doe-19'
-- ;

-- SELECT * FROM customers
-- WHERE (id > 15 OR last_name='Doe-19') AND first_name='Customer-20'
-- ;

-- SELECT * FROM customers
-- WHERE id IN(1,2,3)
-- ;

-- SELECT * FROM customers
-- WHERE id BETWEEN 1 AND 10
-- ;

-- SELECT * FROM customers
-- WHERE id NOT BETWEEN 1 AND 10
-- ; 

-- SELECT * FROM customers
-- WHERE first_name LIKE 'Customer%'
-- ;

SELECT * FROM customers;