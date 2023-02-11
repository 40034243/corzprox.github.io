const express = require('express');
const axios = require("axios");
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send({ error: 'No URL specified' });
  }

  axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.status(500).send({ error });
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`CORS proxy running on port ${port}`);
});
