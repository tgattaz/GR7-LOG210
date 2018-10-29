// On a besoin du serveur et de la requete du module supertest
const server = require('../../server');
const request = require('supertest');
//import RechercheReferent from '../services/RechercheReferent';
//const RechercheReferent = require('../services/RechercheReferent');




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

//describe('chercher', () => {
 // test('Get ref', async () => {


 // const recherche_referent = {
  //  recherche: 'Anthony'
//}

   // const reponse = await request(server).post('/recherche_referents', { recherche_referent });
    //expect(reponse.status).toEqual(200);
// });
//});




