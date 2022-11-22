// await mongoose.connect('mongodb://localhost/my_database');
// for connecting the server to databases.
//code added!
const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/social-network-API', {
    userFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.set('debug' ,true) 

app.listen(PORT, () => console.log(

   `🤩 connected on localhost:${PORT}`));
