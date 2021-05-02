/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');
const {v4: uuidv4} = require('uuid');

const agent = session(app);


describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => {
      const uuid = uuidv4();
      const videogame = {
              id: uuid,
              name: 'Super Mario Bros',
              description: 'mario game for PC',
              releaseDate: '1997-02-05',
              picture: 'any',
              rating: 5.9,
              platforms: "PC, NINTENDO",
};
      return Videogame.create(videogame)})
      
      .catch(err=>console.error(err)));

  describe('GET /videogames', () => {

    
    it('Responde con 200', (done) => {
      agent.get('/videogames').then((res) => {expect(res.status).to.be.equal(200)
        return done(); 
      })
      
    }
    ).timeout(5000);
  
    it('Trae datos correctamente de la API, 161 videojuegos inicialmente', (done) => {
      agent.get('/videogames').then((resp) => {expect(resp.body.length).to.be.equal(161);
        return done();
      }
      ).catch(res => done(new Error(res))); 
      
      

    }).timeout(15000);
  });
});
