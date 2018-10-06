const { Genre } = require('./genreModel');

class GenreDal {

    constructor() {

    }

    save(requestGenre) {
        let genre = new Genre(requestGenre);
        return genre.save();
    }

    findAll() {
        return Genre.find();
    }
}

module.exports = GenreDal;
