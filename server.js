const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');


dotenv.config();
const app = express();

app.use(bodyParser.json());

app.use(morgan('dev'));

let planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.get('/planets', (req, res) => {
  res.json(planets);
});

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
