const pool = require("../config/db");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE email=$1 AND password=$2",
      [email, password]
    );

    if (result.rows.length > 0) {
      res.json({ status: "success" });
    } else {
      res.status(401).json({ status: "fail" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};