INSERT INTO friends
(email, user_id)
VALUES
($1, $2)
RETURNING *