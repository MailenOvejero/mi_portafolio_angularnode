const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola desde el servidor Node.js!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
