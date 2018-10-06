const express = require('express');
const _ = require('lodash');
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
            res.status(201).send(_.pick(user, ["_id", "username", "email"]))
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
