require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const app = express();


//components

const Router = require('./routes/route.js');




app.use(cors());
// middleware to parse JSON data
app.use(express.json());
// middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));


app.use('/', Router);


//connection dataBase:

const uri = 'mongodb+srv://fatimazahrabouamoud:0630624513@cluster0.sydh1ch.mongodb.net/test';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.log('Error while connecting to the database', error);
  });



//Port

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));