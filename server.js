const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const path = require('path');

// Налаштування Nunjucks
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index.njk', { title: 'Головна сторінка' });
});

app.get('/about', (req, res) => {
    res.render('about.njk', { title: 'Про нас' });
});

app.get('/article', (req, res) => {
    res.render('article.njk', { title: 'Стаття' });
});

app.get('/articles', (req, res) => {
    res.render('articles.njk', { title: 'Статті' });
});

app.get('/contact', (req, res) => {
    res.render('contact.njk', { title: 'Контактна сторінка' });
});

app.listen(8080, () => {
    console.log('Сервер працює на http://127.0.0.1:8080');
});