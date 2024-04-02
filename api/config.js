const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors()); 

//DB Connection
mongoose.connect('mongodb://127.0.0.1:27017/react-lycee').then(() => console.log("Connected to MongoDB")).catch(console.error);
module.exports= app