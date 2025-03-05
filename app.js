import express from 'express';
import createHomePageTemplate from './views/index.js';
import createListTemplate from './views/list.js';
import BOOKS_DATA from './data/data.js';

// create app
const app = express();
app.use(express.urlencoded({extended: false}));

// static assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.send(createHomePageTemplate());
});

app.get('/books', (req, res) => {
  res.send(createListTemplate());
});

app.post('/books', (req, res) => {
  const {title, author} = req.body;
  const newBook = {id: Math.random().toString(), title, author};
  BOOKS_DATA.push(newBook);
  res.send(`<li>${title} by ${author}</li>`);
});

// listen to port
app.listen(3000, () => {
  console.log('App listening on port 3000');
});