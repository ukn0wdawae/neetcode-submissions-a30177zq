-- Write your query below
SELECT p.player_id, MIN(p.event_date) as first_login
FROM activity p
GROUP BY p.player_id