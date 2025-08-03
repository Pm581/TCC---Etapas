const express = require('express');
const app = express();
const PORT = 3000;

console.log('Iniciando o servidor...');

let items = []; 

const cors = require('cors');
app.use(cors());


app.use(express.json()); 


app.get('/', (req, res) => {
  res.send('Hello World');
});


app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const novoItem = req.body;
  items.push(novoItem);
  res.json({ mensagem: 'Item adicionado com sucesso!' });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando com sucesso!`);
  console.log(`🌐 Acesse em: http://localhost:${PORT}`);
});