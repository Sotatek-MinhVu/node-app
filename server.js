'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  // res.send('<h1 style="color:DodgerBlue;">Pace Art App ok - version-9!!</h1> \n');
  res.send('<h1 style="color:red;">Pace Art App 11 - version-100!!</h1> \n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
