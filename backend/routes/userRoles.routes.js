const express = require('express');
const router = express.Router();

const userRolesController = require('../controllers/userRoles.controller');

router.get('/', userRolesController.getUserRoles);
router.get('/:id', userRolesController.getUserRoleById);
router.post('/', userRolesController.createUserRole);
router.put('/:id', userRolesController.updateUserRole);
router.delete('/:id', userRolesController.deleteUserRole);

module.exports = router;