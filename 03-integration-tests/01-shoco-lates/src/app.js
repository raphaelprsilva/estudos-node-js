const express = require('express');

const shocoLates = require('./shocoLates');

const app = express();

app.get('/chocolates', async (req, res) => {
  const chocolates = await shocoLates.getAllChocolates();

  return res.status(200).json({ chocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolates = await shocoLates.getAllChocolates();
  const chocolate = chocolates.find((chocolate) => chocolate.id === Number(id));

  if (!chocolate) {
    return res.status(404).json({ message: 'Chocolate not found' });
  }

  return res.status(200).json({ chocolate });
});

module.exports = app;
