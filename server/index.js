// const express = require('express');
import express from 'express';

const app = express();
const PORT=8000;

app.listen(PORT,() => {console.log(`listening on port ${PORT}`)});
