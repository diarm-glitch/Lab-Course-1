const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth.middleware');

const {
  getTodayAppointments,
  getRevenue,
  getPartsStock,
  getTotalCustomers,
  getTotalVehicles
} = require('../controllers/dashboard.controller');

router.get('/today-appointments', authMiddleware, getTodayAppointments);
router.get('/revenue', authMiddleware, getRevenue);
router.get('/parts-stock', authMiddleware, getPartsStock);
router.get('/total-customers', authMiddleware, getTotalCustomers);
router.get('/total-vehicles', authMiddleware, getTotalVehicles);

module.exports = router;