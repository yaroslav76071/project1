const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('started!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
