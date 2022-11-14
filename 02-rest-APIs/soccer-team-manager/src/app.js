const express = require('express');

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

const app = express();

app.use(express.json());

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.get('/teams/:id', (req, res) => {
  const { id } = req.params;
  const foundTeam = teams.find((team) => team.id === Number(id));
  if (!foundTeam) {
    return res.status(404).json({ message: 'Time não encontrado' });
  }

  return res.status(200).json({ team: foundTeam });
});

app.post('/teams', (req, res) => {
  const { name, initials } = req.body;
  const id = teams.length + 1;
  const newTeam = { id, name, initials };
  teams.push(newTeam);
  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const foundTeam = teams.find((team) => team.id === Number(id));

  if (!foundTeam) {
    return res.status(404).json({ message: 'Time não encontrado' });
  }

  const updatedTeam = { id: Number(id), name, initials };
  return res.status(200).json({ team: updatedTeam });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const foundTeam = teams.find((team) => team.id === Number(id));
  if (!foundTeam) {
    return res.status(404).json({ message: 'Time não encontrado' });
  }

  const updatedTeams = teams.filter((team) => team.id !== Number(id));
  return res.status(200).json({ teams: updatedTeams });
});

module.exports = app;
