const express = require('express');
const { validate } = require('./genreRequestValidator');
const GenreDal = require('./genreDal');

const router = express.Router();
const service = new GenreDal();

router.post('/', (req, res) => {
    validate(req.body)
        .then(genre => {
            return service.save(genre);
        })
        .then(saved => {
            res.status(201).send(saved)
        })
        .catch(err => {
            res.status(400).send(err.details[0].message);
        })
});

router.get('/', (req, res) => {
    service.findAll()
        .then(genres => {
            res.send(genres)
        })
});

module.exports = router;
