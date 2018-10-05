const Joi = require('joi');

const schema = Joi.object().keys({
    name: Joi.string().required()
});

const validate = (genre) => {
    return Joi.validate(genre, schema);
};

exports.validate = validate;