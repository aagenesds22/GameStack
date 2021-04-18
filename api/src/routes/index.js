const router = require('express').Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genre = require('./genre.js');
const videogame = require('./videogame.js');
const videogames = require('./videogames');



router.use('/videogames', videogames);
router.use('/videogame', videogame);
router.use('/genre', genre);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
