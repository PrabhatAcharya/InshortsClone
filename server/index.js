// const express = require('express');
import express from 'express';
import Connection from './database/database.js';

const app = express();
const PORT=8000;

Connection();

app.listen(PORT,() => {console.log(`listening on port ${PORT}`)});
