const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const apiRoutes = require('./routes/api');

const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost/aiseguros')
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log('Error MongoDB', err));

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
