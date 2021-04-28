const app = require('express')();
const { default: axios } = require('axios');
const {Videogame, Genre} = require('../db.js');
const {v4: uuidv4} = require('uuid');
const {API_KEY} = process.env;
module.exports = app;

app.get(`/:idVideoGame`, (req, res) => {
   
      const dbFound = Videogame.findOne({
         attributes: [['picture', 'background_image'], 'id', 'name', 'description', ['releaseDate', 'released'], 'platforms'],
         where: {
            id: req.params.idVideoGame,
         },
         include: "genres"
      });

      const apiFound = axios({
         method: "get",
         url: `https://api.rawg.io/api/games/${req.params.idVideoGame}?key=${API_KEY}`
      }).then(response => {
         
         return {
            ...response.data,
            platforms: response.data.platforms.map(elem => {

               return elem.platform.name

            })}});

      
      Promise.allSettled([dbFound, apiFound]).then(response => {
         
         for(let i = 0; i < response.length; i++) {
               
               if(response[i].status === 'fulfilled') return res.status(200).send(response[i].value);
                        
            }

         return res.status(404).send("Not Found");
      }

         , error => res.send(error));
          
       
       

})

app.post(`/`, (req, res) => {

   const uuid = uuidv4();
   const {name, description, genres, releaseDate, rating, platforms} = req.body;



   if(name.includes('_')) return res.sendStatus(400);

   Videogame.create({
      id: uuid,
      name,
      picture: 'https://img3.goodfon.com/wallpaper/nbig/1/16/ps4-xbox-gempad.jpg',
      description, 
      releaseDate,
      rating,
      platforms: platforms.join(","),
   }).then(resp => resp.addGenre(genres)
      .then(resp=> res.send(resp), err=> res.status(404).send(err))) 

   
   
})

