// On a besoin du serveur et de la requete du module supertest
//mettre module.exports = server; dans server.js rappel à moi-même
// faire npm i supertest pour faire fonctionner la variable request
const server = require('../../server');
const request = require('supertest');
//import RechercheReferent from '../services/RechercheReferent'; il y a un bug quand on import un component no idea how to resolve it yet
//const RechercheReferent = require('../services/RechercheReferent'); same



describe('Route par défaut du back-end', () => {
  test('Get la page principale', async () => {
    const reponse = await request(server).get('/');
    expect(reponse.status).toEqual(200);
 });
});

describe('Route par défaut pour afficher les organismes existants', () => {
  test('Get les organismes', async () => {
    const reponse = await request(server).get('/organismes');
    expect(reponse.status).toEqual(200);
 });
});

describe('Route par défaut pour afficher les employes existants', () => {
  test('Get les employes', async () => {
    const reponse = await request(server).get('/employes');
    expect(reponse.status).toEqual(200);
 });
});

describe('Route par défaut pour afficher les organismes referents existants', () => {
  test('Get les organismes referents', async () => {
    const reponse = await request(server).get('/organismes_referents');
    expect(reponse.status).toEqual(200);
 });
});

describe('Route par défaut pour afficher les referents existants', () => {
  test('Get les referents', async () => {
    const reponse = await request(server).get('/referents');
    expect(reponse.status).toEqual(200);
 });
});

describe('Route par défaut pour afficher les roles existants', () => {
  test('Get les roles', async () => {
    const reponse = await request(server).get('/roles');
    expect(reponse.status).toEqual(200);
 });
});

describe('Route par défaut pour afficher les roles existants', () => {
    test('Get les roles', async () => {
      const reponse = await request(server).get('/roles');
      expect(reponse.status).toEqual(200);
   });
  });

  describe('Route par défaut pour ajouter un employe', () => {
    test('Post pour ajouter un employe sans aucun attribut; il devrait y avoir une erreur', async () => {
      const reponse = await request(server).post('/addEmploye');
      expect(reponse.status).toEqual(500);
   });
  });

  describe('Route par défaut pour ajouter un organisme', () => {
    test('Post pour ajouter un organisme sans aucun attribut; il devrait y avoir une erreur', async () => {
      const reponse = await request(server).post('/addOrganisme');
      expect(reponse.status).toEqual(500);
   });
  });

  describe('Route par défaut pour ajouter un organisme referent', () => {
    test('Post pour ajouter un organisme referent sans aucun attribut; il devrait y avoir une erreur', async () => {
      const reponse = await request(server).post('/addOrgaRef');
      expect(reponse.status).toEqual(500);
   });
  });

  describe('Route par défaut pour ajouter un referent', () => {
    test('Post pour ajouter un referent sans aucun attribut; il devrait y avoir une erreur', async () => {
      const reponse = await request(server).post('/addRef');
      expect(reponse.status).toEqual(500);
   });
  });

/*describe('chercher', () => {
  test('Get ref', async () => {
    const state = {
      recherche: 'Anthony',
      referents_trouves: []
  };

  const recherche_referent = {
    recherche: this.state.recherche
}

    const reponse = await request(server).post('/recherche_referents', { recherche_referent });
    expect(reponse.status).toEqual(200);
 });
}); */






