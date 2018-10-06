const express = require('express');
const { validate } = require('./userRequestValidator');
const UserDal = require('./userDal');

const router = express.Router();
const service = new UserDal();

router.post('/', (req, res) => {
    validate(req.body)
        .then(requestUser => {
            return service.save(requestUser);
        })
        .then(user => {
            res.status(201).send(user)
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

router.get('/', (req, res) => {
    service.findAll()
        .then(users => {
            res.send(users)
        })
});

module.exports = router;
