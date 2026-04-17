SELECT l.user_id, 
    MAX(l.time_stamp) AS last_stamp
FROM logins l
WHERE l.time_stamp >= '2020-01-01' AND l.time_stamp < '2021-01-01'
GROUP BY l.user_id