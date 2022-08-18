const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
  });
  res.sendFile(path.join(`${__dirname}/public/index.html`));
});

app.get('/api', (req, res) => res.send({
  json: () => ({ name: 'siavash' }),
}));

app.get('*', (req, res) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
  });
  res.send('404 Error');
});

app.listen(8080, () => {
  console.log('Listening on 8080 port');
});
