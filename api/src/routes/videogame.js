const app = require('express')();
const { default: axios } = require('axios');
const {Videogame, Genre} = require('../db.js');
const {v4: uuidv4} = require('uuid');
module.exports = app;

app.get(`/:idVideoGame`, (req, res) => {
    /*
       Obtener el detalle de un videojuego en particular. Debe traer solo los datos pedidos en la 
       ruta de detalle de videojuego. Incluir los géneros asociados.

       *Los campos mostrados en la ruta principal para cada videojuegos (imagen, nombre, y géneros)
       *Descripción
       *Fecha de lanzamiento
       *Rating
       *Plataformas

    */

       const dbFound = Videogame.findOne({
         where: {
            id: req.params.idVideoGame,
         }
      });

      const apiFound = axios({
         method: "get",
         url: `https://api.rawg.io/api/games/${req.params.idVideoGame}`
      }).then(response => response.data);

      Promise.allSettled([dbFound, apiFound]).then(response => {
         
         for(let i = 0; i < response.length; i++) {
            if(response[i].status === 'fulfilled') return res.status(200).send(response[i].value);
         }
      }

         , error => res.send(error));
          
       

       

   /* Videogame.findOne({
      where: {
         id: req.params.idVideoGame,
      }
   }).then(videogame => {

   }) */
       // posiblemente se utilice redux para esta instancia así el fetch lo realizan las actions (¿estadp global?)
       /* no tiene sentido ir al back para traer algo que ya está en el front!!!!!!!!!!!!!!!!!!!!!!!!!! */
       // alternativa para esto es usar useEffect y usar el fetch dentro de este (chequear M2, películas)
      
       

})

app.post(`/`, async (req, res) => {

   const uuid = uuidv4();
   const {name, description, genres, releaseDate, rating, platforms} = req.body;


  const added = await Videogame.create({
      id: uuid,
      name,
      description, 
      releaseDate,
      rating,
      platforms,
   }, {
   ignoreDuplicates: true})

   added.addGenre([...genres]).then(resp=> res.send(resp), err=> res.status(404).send(err));

/*    const genreFound = await Genre.findAll({
      where: {
         id: genres[0]['id']
      } 
   }).then(respo => added.addGenre(genreFound));

    */

/* 
   res.send(304);
 */


   
   
})

