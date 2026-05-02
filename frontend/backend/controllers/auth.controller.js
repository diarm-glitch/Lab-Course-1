const db = require('../config/db');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  console.log("BODY:", req.body);

  const emri = req.body.emri;
  const mbiemri = req.body.mbiemri;
  const email = req.body.email;
  const password = req.body.password;
  const phone_number = req.body.phone_number;

  if (!emri || !mbiemri || !email || !password) {
    return res.status(400).json({ message: 'Please fill all required fields' });
  }

    db.query('SELECT * FROM Users WHERE email = ?', [email], async (err, results) => {
    if (err) {
        return res.status(500).json({ message: 'Database error', error: err });
    }

    if (results.length > 0) {
        return res.status(400).json({ message: 'Email already exist' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        db.query(
            'INSERT INTO Users (emri, mbiemri, email, password_hash, phone_number, statusi) VALUES (?, ?, ?, ?, ?, ?)',
            [emri, mbiemri, email, hashedPassword, phone_number, 'Active'],
            (err) => {
                if (err) {
                    console.log("INSERT ERROR:", err);
                    return res.status(500).json({ message: 'User registration failed', error: err });
                }

                res.status(201).json({ message: 'User registered successfully' });
            }
        );
    } catch (error) {
        console.log("HASH ERROR:", error);
        res.status(500).json({ message: 'Hashing failed', error });
    }
});
};

exports.login = (req, res) => {
    res.send('Login endpoint');
};