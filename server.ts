const express = require('express');

const app = express();
const port = 3000;

app.use(express.static(`${__dirname}/dist`));

app.use((req, res) => {
  res.status(404).sendFile(`${__dirname}/dist/not_found.html`);
  res.status(500).sendFile(`${__dirname}/dist/server_error.html`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
})
