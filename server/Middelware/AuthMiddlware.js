const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')


const loginRequired = asyncHandler( async (req, res, next) => {
    const token = req.cookies['access_token']
    const decodeToken = jwt.decode(token)
    console.log(decodeToken);
    
    if (token) {
        const validateToken = await jwt.verify(token, process.env.JWT_SECRET)
        if (validateToken) {
            res.user = validateToken.id
            console.log(res.user);
            next()  
            console.log(res.user);
        }
    }else{
        console.error('token is not found')
        res.status(400).send({
            message: "login first"
        })
    }
})

module.exports = loginRequired