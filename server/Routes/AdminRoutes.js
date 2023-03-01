const express = require('express');
const router = express.Router();

const {getUserAdmin} = require ('../Controller/DashboardAdmin')
const protect = require('../Middelware/AuthMiddlware')
const checkRoleAdmin = require('../Middelware/checkRoleAdmin')


router.get('/admin/me', protect)


module.exports = router; 