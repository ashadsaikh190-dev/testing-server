const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://mongodb:27017/mydb')

app.post('/users', async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  });

  res.json(user);
});

app.listen(3000, () => {
  console.log('Server running on port 3000 ok');
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully');
});