const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const movieRoutes = require('./src/routes/movie.routes');

const app = express();

// Middleware para parsear JSON en el body de las peticiones
app.use(express.json());

// Rutas principales
app.use('/api/movies', movieRoutes);

// Conexión a MongoDB y arranque del servidor
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Conectado a MongoDB correctamente');
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Servidor corriendo en http://localhost:${process.env.PORT || 3000}`);
        });
    })
    .catch((error) => {
        console.error('Error al conectar con MongoDB:', error.message);
        process.exit(1);
    });
