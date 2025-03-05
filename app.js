import express from 'express';
import createHomePageTemplate from './views/index.js';

import createListTemplate from './views/list.js';
import createBookTemplate from './views/book.js';
import createEditFormTemplate from './views/edit.js';
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
  res.send(createListTemplate(BOOKS_DATA));
});

app.post('/books', (req, res) => {
  try {
    const {title, author} = req.body;
    const newBook = {id: Math.random().toString(), title, author};
    BOOKS_DATA.push(newBook);
    res.send(createBookTemplate(newBook));
  } catch (error) {
    console.error('Error adding new book:', error);
    res.status(500).send('Error adding new book');
  }
});

app.get('/books/:id', (req, res) => {
  const {id} = req.params;
  const book = BOOKS_DATA.find(book => book.id === id);
  res.send(createBookTemplate(book));
});

app.delete('/books/:id', (req, res) => {
  const {id} = req.params;
  const idx = BOOKS_DATA.findIndex(book => book.id === id);
  BOOKS_DATA.splice(idx, 1);
  res.send()
});

app.get('/books/edit/:id', (req, res) => {
  const {id} = req.params;
  const book = BOOKS_DATA.find(book => book.id === id);
  res.send(createEditFormTemplate(book));
});

app.put('/books/:id', (req, res) => {
  const {id} = req.params;
  const {title, author} = req.body;
  console.log(title, author);
  const book = BOOKS_DATA.find(book => book.id === id);
  book.title = title;
  book.author = author;
  res.send(createBookTemplate(book));
});

app.post('/books/search', (req, res) => {
  const {search} = req.body;
  const Books = BOOKS_DATA.filter(book => book.title.toLowerCase().includes(search.toLowerCase()));
  res.send(createListTemplate(Books));
});

// listen to port
app.listen(3000, () => {
  console.log('App listening on port 3000');
});