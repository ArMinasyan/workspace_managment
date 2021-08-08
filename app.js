const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, 'env', `${process.env.NODE_ENV}.env`)
})

require('./db/db.config');


const express=require('express');
const app=express();

const {authRoute} =require('./routes');

app.use('/api',[
  authRoute
])

app.listen(8080,()=>{
  console.log('Start')
})

