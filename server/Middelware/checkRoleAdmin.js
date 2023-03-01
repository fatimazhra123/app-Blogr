const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const asyncHandler = require('express-async-handler')
const db = require('../Models/UserModel')
const UserModel = db.UserModel




const CheckRoleClient = asyncHandler(async (req, res, next) => {
    const token = req.cookies['access-token']
    console.log(token);

    try {
        const validateToken = await jwt.verify(token, process.env.JWT_SECRET)
        console.log(('rfffffffffffffff'));
        console.log(validateToken);
        console.log(('#########################'));
        const user = await UserModel.findOne({ where: { id_user: validateToken.id } })
        console.log(user.role);
        if (user.role !== 'admin') {
            res.status(403).send('access denied')
        }
        next()
    } catch (error) {
        console.log(error);
    }



})

module.exports = CheckRoleClient
