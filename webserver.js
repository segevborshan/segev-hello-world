const express = require('express');
const PORT = 80;
const HOST = '0.0.0.0';
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World ----- segev-example');
});

app.listen(PORT, HOST);
