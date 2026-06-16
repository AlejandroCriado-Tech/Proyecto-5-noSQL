const Movie = require('../models/movie.model');

// GET /api/movies — Obtener todas las películas
const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener las películas',
            detail: error.message,
        });
    }
};

// GET /api/movies/:id — Obtener una película por ID
const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ error: 'Película no encontrada' });
        }
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener la película',
            detail: error.message,
        });
    }
};

// POST /api/movies — Crear una nueva película
const createMovie = async (req, res) => {
    try {
        const movie = new Movie(req.body);
        const savedMovie = await movie.save();
        res.status(201).json(savedMovie);
    } catch (error) {
        // 400 si falla la validación del schema de Mongoose
        res.status(400).json({
            error: 'Error al crear la película',
            detail: error.message,
        });
    }
};

// PUT /api/movies/:id — Actualizar una película existente
const updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,          // Devuelve el documento ya actualizado
                runValidators: true, // Ejecuta las validaciones del schema
            }
        );
        if (!movie) {
            return res.status(404).json({ error: 'Película no encontrada' });
        }
        res.status(200).json(movie);
    } catch (error) {
        res.status(400).json({
            error: 'Error al actualizar la película',
            detail: error.message,
        });
    }
};

// DELETE /api/movies/:id — Eliminar una película
const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if (!movie) {
            return res.status(404).json({ error: 'Película no encontrada' });
        }
        res.status(200).json({
            message: 'Película eliminada correctamente',
            movie,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error al eliminar la película',
            detail: error.message,
        });
    }
};

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
};
