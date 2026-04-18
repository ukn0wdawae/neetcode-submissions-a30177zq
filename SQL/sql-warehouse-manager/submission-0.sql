SELECT 
    w.name AS warehouse_name,
    -- 1. Calculate 1 item's volume
    -- 2. Multiply by the number of units in the warehouse
    -- 3. SUM it all up for the whole warehouse
    SUM((p.width * p.length * p.height) * w.units) AS volume
FROM warehouse w
JOIN products p ON w.product_id = p.product_id
GROUP BY w.name;