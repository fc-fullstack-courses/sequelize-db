const express = require('express');

const app = express();

/*
  get - получение данных (селекты)
  post - создание данных (инсерты)
  put / patch - обновление (UPDATE)
  delete - удаление данных (DELETE)
*/

app.use(express.json());

app.get(
  '/users',
  async (req, res, next) => {
    console.log('I`m a middleware');
    // next(); // нормальный переход дальше
    next('test'); // произошла ошибка
  },
  async (req, res, next) => {
    res.send('hello from users');
  }
);

app.post('/users', async (req, res, next) => {
  const { body } = req;

  res.send(body);
});

app.use(
  async (err, req, res, next) => {
    console.log(`Error is ${err}`);
    if (Math.random() > 0.5) {
      return res.send('Error!');
    }
    next(err);
  },
  async (err, req, res, next) => {
    console.log(`Error is ${err}`);
    if (Math.random() > 0.5) {
      return res.send('Error!');
    }
    next(err);
  }
);

module.exports = app;
