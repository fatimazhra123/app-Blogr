const express = require('express');
const router = express.Router();

const {getUserClient} = require ('../Controller/ProfileClient')
const protect = require('../Middelware/AuthMiddlware')
const checkRoleClient = require('../Middelware/CheckRoleClient')


router.get('/client/me', protect, checkRoleClient, getUserClient)


module.exports = router; 