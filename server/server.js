// const express = require('express');
import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/routes.js';
import dotenv from 'dotenv';
const path = require('path');

const app = express();
dotenv.config();


app.use(cors());
app.use('/',Route);

//static files
app.use(express.static(path.join(__dirname,'../client/build')))

app.get('*',function(req, res){
    res.sendFile(path.join(__dirname,'../client/build/index.html'));
})

const PORT = process.env.PORT || 8080;
const username=process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
 const URL =process.env.MONGODB_URI || `mongodb://${username}:${password}@ac-sqcukc8-shard-00-00.zywfeff.mongodb.net:27017,ac-sqcukc8-shard-00-01.zywfeff.mongodb.net:27017,ac-sqcukc8-shard-00-02.zywfeff.mongodb.net:27017/?ssl=true&replicaSet=atlas-dsel0c-shard-0&authSource=admin&retryWrites=true&w=majority`;

 Connection(URL);

app.listen(PORT,() => {console.log(`Server is listening on ${PORT}`);});
DefaultData();