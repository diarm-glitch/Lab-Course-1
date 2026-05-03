const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth.middleware');

const {
  getServiceRecords,
  getServiceRecordById,
  createServiceRecord,
  updateServiceRecord,
  deleteServiceRecord
} = require('../controllers/serviceRecord.controller');

router.get('/', authMiddleware, getServiceRecords);
router.get('/:id', authMiddleware, getServiceRecordById);
router.post('/', authMiddleware, createServiceRecord);
router.put('/:id', authMiddleware, updateServiceRecord);
router.delete('/:id', authMiddleware, deleteServiceRecord);

module.exports = router;