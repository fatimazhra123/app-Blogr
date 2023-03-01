require('dotenv').config();
const express = require('express');
const mongoose =require("mongoose")
const UserModel=require('./Models/UserModel')
const app = express();
const coockieparser = require('cookie-parser')
const bodyParser = require('body-parser')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(coockieparser())
const cors = require('cors');
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({ extended: false }))







const clientRouter = require('./Routes/ClientRoutes')
const adminRouter = require('./Routes/AdminRoutes')
const authRouter = require('./Routes/AuthRoutes')


app.use(express.static('public'))

app.use('/api/user', clientRouter)

app.use('/api/user', adminRouter)

app.use('/api/auth', authRouter)








mongoose.connect(process.env.CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Database connected'))
.catch(err => console.log('Error connecting to database:', err));  






const port = process.env.PORT || 8080

app.listen(port, (err) => {
    if (!err) {
        console.log(`the server is raning in the port ${port}`);
    } else {
        console.log(err);
    }
})


module.exports = app


