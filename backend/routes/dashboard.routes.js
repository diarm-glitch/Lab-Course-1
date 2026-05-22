const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth.middleware');

const {
  getTodayAppointments,
  getRevenue,
  getPartsStock
} = require('../controllers/dashboard.controller');

router.get('/today-appointments', authMiddleware, getTodayAppointments);
router.get('/revenue', authMiddleware, getRevenue);
router.get('/parts-stock', authMiddleware, getPartsStock);

module.exports = router;