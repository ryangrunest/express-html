// init express
const express = require('express');
const app = express();
// port and host variables
const port = process.env.PORT || 8080;
const host = 'localhost';

app.get('/', (req,res) => {
  // res.send('<h1>banana</h1>');
  res.render('index.ejs');
});

app.get('/fallinlovewith/:thing', (req,res) => {
  const thing = req.params.thing;
  res.render('love.ejs', { thingVar: thing });
})

app.get('/posts', (req, res) =>  {
  const posts = [
    {
      title: 'Post 1',
      author: 'Susie'
    }, {
      title: 'My adorable pet bunny',
      author: 'Chuck'
    }, {
      title: 'Can you beleive this Pomsky?',
      author: 'Ryguy'
    }
  ];
  res.render('posts.ejs', {posts: posts});
})


app.listen(port, host, () => { console.log('server now listening') });