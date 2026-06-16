const express = require('express');
const router = express.Router();
const {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
} = require('../controllers/movie.controller');

// GET    /api/movies         → Todas las películas
router.get('/', getAllMovies);

// GET    /api/movies/:id     → Una película por ID
router.get('/:id', getMovieById);

// POST   /api/movies         → Crear nueva película
router.post('/', createMovie);

// PUT    /api/movies/:id     → Modificar película existente
router.put('/:id', updateMovie);

// DELETE /api/movies/:id     → Eliminar película
router.delete('/:id', deleteMovie);

module.exports = router;
