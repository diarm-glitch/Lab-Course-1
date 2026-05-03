const db = require('../config/db');

exports.getServiceTypes = (req, res) => {
  db.query('SELECT * FROM servicetypes', (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error', error: err });
    res.status(200).json(results);
  });
};

exports.createServiceType = (req, res) => {
  const { emertimi, pershkrimi, cmimi_baze, kohezgjatja_mesatare } = req.body;

  if (!emertimi || !cmimi_baze) {
    return res.status(400).json({ message: 'Please fill required fields' });
  }

  db.query(
    'INSERT INTO servicetypes (emertimi, pershkrimi, cmimi_baze, kohezgjatja_mesatare) VALUES (?, ?, ?, ?)',
    [emertimi, pershkrimi, cmimi_baze, kohezgjatja_mesatare],
    (err) => {
      if (err) return res.status(500).json({ message: 'Creation failed', error: err });

      res.status(201).json({ message: 'Service type created successfully' });
    }
  );
};