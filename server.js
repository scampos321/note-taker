const express = require('express');
const path = require('path');
const fs = require('fs');
const apiRoute = require('./public/routes/apiRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use("/api", apiRoute)

app.get("/notes", (req, res) => {
    res.sendFile(__dirname + "/public/notes.html");
  });

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
    console.info(`Listening on PORT: http://localhost:${PORT}`)
);