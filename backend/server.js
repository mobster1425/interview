require('dotenv').config();

const express=require('express');
const cors=require('cors');


const app=express();

const corsOptions={
  origin:"https://interview-ghcl.onrender.com",//frontend url
}

app.use(cors(corsOptions));

require('express-async-errors');



const helmet = require('helmet');
 const xss = require('xss-clean');
 const mongoSanitize = require('express-mongo-sanitize');
 

 const nameRoute=require('./routes/nameRoute.js');
const mongoose=require('mongoose');
 
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());



app.use('/api/v1/name',nameRoute);


const port = process.env.PORT || 5000;
console.log(port);

  const url = process.env.MONGODB_URI

  console.log('connecting to', url)
  mongoose.connect(url)
    .then(result => {
      console.log('connected to MongoDB')
      console.log(port);
    })
    .catch((error) => {
      console.log('error connecting to MongoDB:', error.message)
    })

    app.listen(port,( )=>{
        console.log(`Server running on port ${port}`)
        } );

