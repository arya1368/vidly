const express = require('express');
const { validate } = require('./genreRequestValidator');
const GenreDal = require('./genreDal');

const router = express.Router();
const service = new GenreDal();

router.post('/', (req, res) => {
    validate(req.body)
        .then(requestGenre => {
            return service.save(requestGenre);
        })
        .then(genre => {
            res.status(201).send(genre)
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

router.get('/', (req, res) => {
    service.findAll()
        .then(genres => {
            res.send(genres)
        })
});

module.exports = router;
