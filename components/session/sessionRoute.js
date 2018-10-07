const express = require('express');
const { validate } = require('./sessionRequestValidator');
const Session = require('./session');

const router = express.Router();

router.post('/', (req, res) => {
    validate(req.body)
        .then(credential => {
            return Session.newInstance(credential);
        })
        .then(session => {
            res.send(session.generateToken());
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

module.exports = router;
