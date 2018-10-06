const Joi = require('joi');

const schema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().required()
});

const validate = (user) => {
    return Joi.validate(user, schema);
};

exports.validate = validate;
