const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'El título es obligatorio'],
            trim: true,
        },
        director: {
            type: String,
            required: [true, 'El director es obligatorio'],
            trim: true,
        },
        year: {
            type: Number,
            min: [1888, 'El año no puede ser anterior a 1888'],
            max: [new Date().getFullYear(), 'El año no puede ser futuro'],
        },
        genre: {
            type: String,
            trim: true,
        },
        rating: {
            type: Number,
            min: [0, 'La puntuación mínima es 0'],
            max: [10, 'La puntuación máxima es 10'],
        },
        synopsis: {
            type: String,
            trim: true,
        },
    },
    {
        // Añade automáticamente los campos createdAt y updatedAt
        timestamps: true,
    }
);

module.exports = mongoose.model('Movie', movieSchema);
