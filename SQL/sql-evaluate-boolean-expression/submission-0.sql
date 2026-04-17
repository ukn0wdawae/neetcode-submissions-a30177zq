SELECT e.left_operand as left_operand,e.operator as operator,e.right_operand as right_operand,
  CASE 
    WHEN e.operator = '>'  AND v_left.value > v_right.value  THEN 'true'
    WHEN e.operator = '<'  AND v_left.value < v_right.value  THEN 'true'
    WHEN e.operator = '='  AND v_left.value = v_right.value  THEN 'true'
    ELSE 'false'
  END AS value
FROM expressions e
LEFT JOIN variables v_left ON e.left_operand = v_left.name
LEFT JOIN variables v_right ON e.right_operand = v_right.name;