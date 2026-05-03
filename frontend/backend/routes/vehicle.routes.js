const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth.middleware');

const {
  getVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle
} = require('../controllers/vehicle.controller');

router.get('/', authMiddleware, getVehicles);
router.get('/:id', authMiddleware, getVehicleById);
router.post('/', authMiddleware, createVehicle);
router.put('/:id', authMiddleware, updateVehicle);
router.delete('/:id', authMiddleware, deleteVehicle);

module.exports = router;