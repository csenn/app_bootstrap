const express = require('express');
const path = require('path');
const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('/hello', (req, res) => {
  res.send({ hello: 'hehe' })
})

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;