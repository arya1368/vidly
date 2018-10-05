const { Genre } = require('../models/genre');

async function save(requestGenre) {
    let genre = new Genre(requestGenre);
    return await genre.save();
}

function findAll() {
    return Genre.find();
}

exports.save = save;
exports.findAll = findAll;