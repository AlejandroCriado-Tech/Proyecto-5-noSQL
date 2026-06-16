# Proyecto 5 - API REST Movies (Node.js + Express + MongoDB)

API REST con CRUD completo para gestionar películas, desarrollada con Node.js, Express y MongoDB.

## Estructura del proyecto

```
├── index.js                        # Entrada: conecta MongoDB y arranca el servidor
├── .env.example                    # Variables de entorno de ejemplo
└── src/
    ├── routes/
    │   └── movie.routes.js         # Definición de rutas
    ├── controllers/
    │   └── movie.controller.js     # Lógica de cada endpoint
    └── models/
        └── movie.model.js          # Schema de Mongoose
```

## Requisitos previos

- [Node.js](https://nodejs.org/) instalado
- [MongoDB](https://www.mongodb.com/) corriendo en local

## Instalación y arranque

1. Clona el repositorio:
   ```bash
   git clone https://github.com/AlejandroCriado-Tech/Proyecto-5-noSQL.git
   cd Proyecto-5-noSQL
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea el archivo `.env` a partir del ejemplo:
   ```bash
   cp .env.example .env
   ```

4. Arranca el servidor:
   ```bash
   npm run dev
   ```

El servidor arrancará en `http://localhost:3000` y se conectará a MongoDB en `mongodb://localhost:27017/moviesdb`.

## Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/movies` | Obtener todas las películas |
| GET | `/api/movies/:id` | Obtener una película por ID |
| POST | `/api/movies` | Crear una nueva película |
| PUT | `/api/movies/:id` | Modificar una película |
| DELETE | `/api/movies/:id` | Eliminar una película |

## Ejemplo de body para POST / PUT

```json
{
  "title": "Inception",
  "director": "Christopher Nolan",
  "year": 2010,
  "genre": "Sci-Fi",
  "rating": 8.8,
  "synopsis": "Un ladrón que roba secretos corporativos a través de los sueños."
}
```

## Pruebas

Las capturas de las pruebas realizadas con Thunder Client están disponibles en la carpeta `/capturas` del repositorio.
