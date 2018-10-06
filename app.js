const mongoose = require('mongoose');
const express = require('express');
const genreRoute = require('./components/genre/genreRoute');

mongoose.connect('mongodb://localhost/vidly', { useNewUrlParser: true } )
    .then(() => console.log("connected to vidly db successfully."))
    .catch(err => {
        console.log(err);
        throw new Error("couldn't connect to db.");
    });

const app = express();
app.use(express.json());

app.use('/api/genres', genreRoute);

app.listen(3000, () => console.log("vidly is up on port 3000"));
