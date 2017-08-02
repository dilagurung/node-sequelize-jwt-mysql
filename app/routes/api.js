'use strict';

var router = require('express').Router();

var config = require('../config'),
    allowOnly = require('../services/routesHelper').allowOnly,
    AuthController = require('../controllers/authController'),
    UserController = require('../controllers/userController'),

    licenseController = require('../controllers/licenseController'),
    candidateController = require('../controllers/candidateController'),
    companyController = require('../controllers/companyController'),
    contactController = require('../controllers/contactController'),
    jobController = require('../controllers/jobController'),

    AdminController = require('../controllers/adminController'),  
organizationController = require('../controllers/organizationController');

var APIRoutes = function(passport) {
    // POST Routes.
   // router.post('/signup', AuthController.signUp);
    router.post('/authenticate', AuthController.authenticateUser);

    // GET Routes.
    router.get('/profile', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, UserController.index));
    router.get('/admin', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, AdminController.index));
    router.post('/signup', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, AuthController.signUp));


    // http://localhost:8080/api/organization/id/?id=ORG01
    router.post('/organization', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, organizationController.add));
    router.put('/organization/:id', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, organizationController.update));
    router.delete('/organization/:id', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, organizationController.drop));
    router.get('/organization/id', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, organizationController.find_by_id));
    router.get('/organization', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, organizationController.find_all));


    router.post('/license', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, licenseController.add));
    router.put('/license/:id', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, licenseController.update));
    router.delete('/license/:id', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, licenseController.drop));
    router.get('/license/id', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, licenseController.find_by_id));
    router.get('/license', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, licenseController.find_all));


    //candidate
    router.post('/candidate', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, candidateController.add));
    router.put('/candidate/:id', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, candidateController.update));
    router.delete('/candidate/:id', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, candidateController.drop));
    router.get('/candidate/id', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, candidateController.find_by_id));
    router.get('/candidate', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, candidateController.find_all));


    //company

    router.post('/company', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, companyController.add));
    router.put('/company/:id', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, companyController.update));
    router.delete('/company/:id', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, companyController.drop));
    router.get('/company/id', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, companyController.find_by_id));
    router.get('/company', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, companyController.find_all));







    //contact

    router.post('/contact', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, contactController.add));
    router.put('/contact/:id', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, contactController.update));
    router.delete('/contact/:id', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, contactController.drop));
    router.get('/contact/id', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, contactController.find_by_id));
    router.get('/contact', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, contactController.find_all));



    //job
    router.post('/job', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, jobController.add));
    router.put('/job/:id', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, jobController.update));
    router.delete('/job/:id', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, jobController.drop));
    router.get('/job/id', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, jobController.find_by_id));
    router.get('/job', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, jobController.find_all));











    return router;
};

module.exports = APIRoutes;