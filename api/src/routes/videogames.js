const app = require('express').Router();
const {Videogame} = require('../db.js');
const {Op} = require('sequelize');
const axios = require('axios').default;
const {API_KEY} = process.env;



app.get('/', (req, res) => {
    /*
         ************************* REDUX LLAMARÁ A ESTA RUTA *************************
     Se deben mostrar tanto los videjuegos traidos desde la API como así también los de la base de datos.
     Debido a que en la API existen alrededor de 500 mil juegos, por cuestiones de performance pueden 
     tomar la simplificación de obtener y paginar los primeras 100.
    */
     const reqPage = `https://api.rawg.io/api/games?key=${API_KEY}&`;
     const {name} = req.query;
     let parsedArray = [];
     console.log('-----------------\n', name, '\n-----------------\n');
     if (name && name.length>0) {
         
        axios({
            url: `${reqPage}search=${name}`,
            method: 'get'
            
        }).then(resp => {
            parsedArray = [...resp.data.results]
            return Videogame.findAll({
                where: {
                    name:{
                        [Op.iLike]: `%${name}%`,
                    }
                } 
            })
        }).then(resp => {
            parsedArray = [...resp, ...parsedArray];
            res.status(200).send(parsedArray);
        });

        return;

    } else if(name && !name.entries || name && name.length < 1){

        return res.send('Refactor your search.')
    }

    /*  Videogame.findAll({
         
     }).then(response => console.log(response), err=> console.log(err)); */


     axios.all([1, 2, 6, 4, 5].map(elem => axios.get(reqPage+'page='+`${elem}`))).then(axios.spread((...args)=> {
         console.log('OK');
         /* console.log(typeof args[0].data.results);
         console.log(args[0].data)
         console.log(args[0].data.results) */
         for(let i = 0; i < args.length; i++) {
             /* args[i].data.results.concat(args[i+1].data.results); */

             parsedArray = [...parsedArray, ...args[i].data.results];

         }
        
     })).then(()=> {

        Videogame.findAll().then(resp => {
            console.log(resp); 
            parsedArray=[...resp,...parsedArray]
            parsedArray.splice(100); // el máximo debe ser 100
            /* console.log(parsedArray); */
            res.send(parsedArray);
        })

     }, (err) => res.status(400).send(`Could not reach API.${err}`));



     /* la propiedad results contiene un array de arrays, igual al número de consultas realizadas por axios. A su vez, cada uno de esos arrays 
       contiene objetos que son los JUEGOS, con distintas propiedades */


     /* axios({
         method: 'get',
         url: 'https://api.rawg.io/api/games?key=e7b06e6d0b694168949d5daf64b0be1b',

     }).then(response => res.send(response.data)).catch(err => console.log(err)) */


     
     // el máximo debe ser 100 y estar paginado
     // const {name} = req.query;
})

module.exports = app;

