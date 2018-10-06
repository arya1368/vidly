const { User } = require('./userModel');

class UserDal {

    save(requestUser) {
        let user = new User(requestUser);
        return user.save();
    }

    findAll() {
        return User.find()
            .select("username email")
            .sort("-_id")
    }
}

module.exports = UserDal;
