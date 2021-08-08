const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, 'env', `${process.env.NODE_ENV}.env`)
})

require('./db/db.config');


const body_parser=require('body-parser');

const express=require('express');
const app=express();

app.use(body_parser.urlencoded({
  extended:true
}));
app.use(body_parser.json());

const {authRoute} =require('./routes');

app.use('/api',[
  authRoute
])

app.listen(8080,()=>{
  console.log('Start')
})

