const express = require('express');

const ProjectRouter = require('../project/project-router.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.use('/api/project', ProjectRouter);

module.exports = server;