const { GenreModel } = require('./genreModel');

class GenreDal {

    constructor() {

    }

    save(requestGenre) {
        let genre = new GenreModel(requestGenre);
        return genre.save();
    }

    findAll() {
        return GenreModel.find();
    }
}

module.exports = GenreDal;
