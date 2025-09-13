const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

// Routes for resources
router.get('/resources', controllers.getAllResources);
router.post('/resources', controllers.addResource);
router.delete('/resources/:id', controllers.deleteResource);

// Routes for authors
router.get('/authors', controllers.getAllAuthors);
router.post('/authors', controllers.addAuthor);
router.delete('/authors/:id', controllers.deleteAuthor);

module.exports = router;
