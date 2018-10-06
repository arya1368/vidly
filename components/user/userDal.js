const { User } = require('./userModel');
const bcrypt = require('bcrypt');

class UserDal {

    async save(requestUser) {
        let user = new User(requestUser);
        user.password = await this.hashPassword(user.password);
        return user.save();
    }

    async hashPassword(pass) {
        let salt = await bcrypt.genSalt(10);
        return bcrypt.hash(pass, salt)
    }

    findAll() {
        return User.find()
            .select("username email")
            .sort("-_id")
    }
}

module.exports = UserDal;
