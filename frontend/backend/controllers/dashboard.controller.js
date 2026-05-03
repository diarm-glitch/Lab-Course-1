const db = require('../config/db');

exports.getTodayAppointments = (req, res) => {
  db.query(
    'SELECT * FROM appointments WHERE data = CURDATE()',
    (err, results) => {
      if (err) return res.status(500).json({ message: 'Database error', error: err });
      res.status(200).json(results);
    }
  );
};

exports.getRevenue = (req, res) => {
  db.query(
    'SELECT SUM(totali) AS total_revenue FROM invoices',
    (err, results) => {
      if (err) return res.status(500).json({ message: 'Database error', error: err });
      res.status(200).json(results[0]);
    }
  );
};

exports.getPartsStock = (req, res) => {
  db.query(
    'SELECT id, emertimi, sasia FROM parts ORDER BY sasia ASC',
    (err, results) => {
      if (err) return res.status(500).json({ message: 'Database error', error: err });
      res.status(200).json(results);
    }
  );
};