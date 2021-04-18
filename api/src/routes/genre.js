const router = require('express').Router();

const { default: axios } = require('axios');
const { response } = require('express');
const {Genre} = require('../db.js');



router.get('/', async (req, res) => {
    
    let genres = [];
    let any;

try {

    any = await Genre.findAll();
    return res.status(200).send(any);

} catch(err) {
    
    console.log(err);
    axios({
        url: `https://api.rawg.io/api/genres?key=e7b06e6d0b694168949d5daf64b0be1b`,
        method: 'get', 
       }).then(response => {


        Genre.bulkCreate([...response.data.results], {
            fields: ['id', 'name'],
        }).then(()=> Genre.findAll()).then(users => res.send(users));

        
    }, error => res.status(404).send('Unable to reach API. Error:', error));

}
    /* Genre.findOrCreate() */
})


module.exports = router;