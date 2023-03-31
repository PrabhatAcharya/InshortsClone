// const express = require('express');
import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/routes.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(cors());
app.use('/',Route);
const PORT =  8080;
const username=process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT,() => {console.log(`Server is listening on ${PORT}`);});
DefaultData();