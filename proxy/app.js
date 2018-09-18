const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../public')));

app.use((req, res) => {
  const restaurantId = req.path.slice(1).split('/')[0];
  if (restaurantId && Number.isInteger(+restaurantId)) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  } else {
    res.send('Error').end();
  }
});

module.exports = app;
