const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth.middleware');

const {
  getServiceTypes,
  createServiceType
} = require('../controllers/serviceType.controller');

router.get('/', authMiddleware, getServiceTypes);
router.post('/', authMiddleware, createServiceType);

module.exports = router;