const { UserModel } = require('./userModel');
const bcrypt = require('bcrypt');

class UserDal {

    async save(requestUser) {
        let user = new UserModel(requestUser);
        user.password = await this.hashPassword(user.password);
        return user.save();
    }

    async hashPassword(pass) {
        let salt = await bcrypt.genSalt(10);
        return bcrypt.hash(pass, salt)
    }

    findAll() {
        return UserModel.find()
            .select("username email")
            .sort("-_id")
    }

    findByUsername(username) {
        return UserModel.findOne({username: username})
    }
}

module.exports = UserDal;
