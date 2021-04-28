const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');
const {v4: uuidv4} = require('uuid');

describe('Videogame model', () => {

  before(() => conn.authenticate()

    .catch((err) => {

      console.error('Unable to connect to the database:', err);

    }));

  describe('Añade juegos y los encuentra', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('Creación de videojuego', () => {
      it('Debe tirar error si falta algún campo obligatorio', (done) => {
        
        Videogame.create({
        description: 'mario game for PC',
        releaseDate: '1997-02-05',
        picture: 'any',
        rating: 5.2,
        platforms: "PC, NINTENDO",})

          .then(() => done(new Error('No debería crearse pero se está creando')))
          .catch(() => done());
      });

      it('Añade correctamente los juegos a la base de datos', (done) => {
        const uuid = uuidv4();
        Videogame.create(

                  { 
                      id: uuid,
                      name: 'Super Mario Bros',
                      description: 'mario game for PC',
                      releaseDate: '1997-02-05',
                      picture: 'any',
                      rating: 5.2,
                      platforms: "PC, NINTENDO",
                     }).then(resp => resp.addGenre([4, 5])

                  .then((res) => done()))
                  .catch((res) => done(new Error(res)));
      });

      it('Encuentra correctamente un juego añadido previamente', (done) => {
        const uuid = uuidv4();

        Videogame.create(

          { 
              id: uuid,
              name: 'Super Mario Bros',
              description: 'mario game for PC',
              releaseDate: '1997-02-05',
              picture: 'any',
              rating: 5.2,
              platforms: "PC, NINTENDO",
             }).then(resp => resp.addGenre([4, 5])

          .then((res) => Videogame.findOne({
            where: {
              id: uuid,
            }
          })).then((res) => done())
          .catch((res) => done(new Error(res))));
      })
    });
  });
});
