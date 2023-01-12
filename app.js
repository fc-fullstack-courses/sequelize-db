const express = require('express');

const app = express();

/*
  get - получение данных (селекты)
  post - создание данных (инсерты)
  put / patch - обновление (UPDATE)
  delete - удаление данных (DELETE)
*/

app.get('/users', async (req, res, next) => {
  res.send('hello from users');
});

module.exports = app;