let userId = req.body.userId; // user input
let sql = `SELECT * FROM users WHERE id = ${userId}`;
