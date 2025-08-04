const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let items = [];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const { nome } = req.body;
  if (!nome) {
    return res.status(400).json({ mensagem: 'Nome é obrigatório' });
  }
  items.push({ nome });
  res.json({ mensagem: 'Item adicionado com sucesso' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
