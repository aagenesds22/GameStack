const app = require('express').Router();
const {Videogame} = require('../db.js');
const {Op} = require('sequelize');
const axios = require('axios').default;
const {API_KEY} = process.env;



app.get('/', (req, res) => {
    
     const reqPage = `https://api.rawg.io/api/games?key=${API_KEY}&`;
     const {name} = req.query;
     let parsedArray = [];
    
     if (name && name.length>0) {
         
        axios({
            url: `${reqPage}search=${name}`,
            method: 'get'
            
        }).then(resp => {
            
                        parsedArray = [...resp.data.results]

            return Videogame.findAll({
                attributes: [['picture', 'background_image'], 'id', 'name', 'description', 'releaseDate', 'platforms'],
                include: "genres",
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



     axios.all([1, 2, 6, 4, 5, 7, 9, 8].map(elem => axios.get(reqPage+'page='+`${elem}`)))
                        .then(resp => resp)
                        .then((args)=> {
                                                    
                                                    for(let i = 0; i < args.length; i++) {
                                                        parsedArray = [...parsedArray, ...args[i].data.results];
                                                    }
                                                    
                                                    return ;
     }).then(()=> {

            Videogame.findAll({
                        attributes: [['picture', 'background_image'], 'id', 'name', 'description', 'releaseDate', 'platforms'],
                        include: "genres", 
                        }).then(resp => {
                                        parsedArray=[...resp,...parsedArray]
                                        res.send(parsedArray);
        })

     }, (err) => res.status(400).send(`Could not reach API.${err}`));

})

module.exports = app;

