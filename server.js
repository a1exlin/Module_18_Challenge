// await mongoose.connect('mongodb://localhost/my_database');
// for connecting the server to databases.
const mongoose = require('mongoose')
const express = require('express');
const { application } = require('express');

var PORT = 3001;
var app = express();
// middleware 
app.use(express.json());