const express = require('express');
const { validate } = require('./validator');
const { Genre } = require('../../models/genre');

const router = express.Router();

router.post('/', (req, res) => {
    validate(req.body)
        .then(genre => {
            // save genre in db
            res.status(201).send(`save ${genre}`)
        })
        .catch(err => {
            res.status(400).send(err.details[0].message);
        })
});

router.get('/', (req, res) => {
    // get all genres
    res.send([]);
});

module.exports = router;