const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserDal = require('../user/userDal');

const userDal = new UserDal;

class Session {

    static async newInstance(credential) {
        const user = await userDal.findByUsername(credential.username);
        console.log(user);
        if (!user || await !this.isValid(credential, user))
            throw new Error("invalid username or password");

        return new this(user)
    }

    static isValid(credential, user) {
        return bcrypt.compare(credential.password, user.password)
    }

    constructor(user) {
        this.user = user;
    }

    generateToken() {
        return jwt.sign({
            userId: this.user._id,
            username: this.user.username
        }, 'privateKey')
    }
}

module.exports = Session;
