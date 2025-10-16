const express = require('express');
const app = express();

// O Render define a porta na variável de ambiente PORT
const PORT = process.env.PORT || 3000;

// Configura o middleware para receber JSON no corpo da requisição (necessário para webhooks)
app.use(express.json());

// ----------------------------------------------------------------------------------
// ROTA 1: Rota Raiz (Página de Teste Visual com IMAGEM 3D)
// A URL principal agora mostra uma página personalizada com o logo 3D.
app.get('/', (req, res) => {
  // A imagem do Modelo 3 codificada em Base64
  const base64Image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAACcCAMAAAD+p0x3AAAAdVBMVEX///8AAADY2Nj8/PzU1NTIyMiioqL4+PjDw8PMzMy7u7vu7u7k5OTt7e3m5ubFxcX29vYWFhbz8/P6+vrg4OCnp6eVlZWysrKgoKCcnJyPj4+enp6dnZ3R0dHExMTj4+Py8vLDw8O+vr4qKipgYGBISEj2c0lRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAKk0lEQVR4nO3d61baOhaA4VigvICmCCvA97/R91iSAu9nB9zN3k+dSZp1m8y920jM2/h+p+4j1yTJWpZlWYn/G36m6/xTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTz/yTTyR0lNTyBNb1RvIFP5Q1NBUyBkZSBtYWlzIC4uLg=='; // Substitua com sua imagem 3D Base64

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Serviço de Webhook - 3R MOTO PEÇAS</title>
        <style>
            body {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #f4f4f4; /* Fundo suave */
                text-align: center;
            }
            .container {
                padding: 40px;
                border-radius: 12px;
                background-color: white;
                box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15); /* Sombra mais destacada */
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .logo-img {
                max-width: 80%; /* Ajusta o tamanho da imagem */
                height: auto;
                margin-bottom: 20px;
            }
            .status {
                font-size: 1.4em;
                color: #28a745; /* Verde de sucesso */
                font-weight: 600;
                margin-top: 15px;
            }
            .info {
                color: #6c757d;
                margin-top: 25px;
                font-size: 1.1em;
            }
            .callback-url {
                font-weight: bold;
                color: #dc3545; /* Vermelho para destaque da URL */
                word-break: break-all; /* Quebra a URL se for muito longa */
            }
        </style>
    </head>
    <body>
        <div class="container">
            <img src="${base64Image}" alt="3R MOTO PEÇAS Logo 3D" class="logo-img">
            <p class="status">✅ SERVIDOR DE WEBHOOK ESTÁ ATIVO!</p>
            <p class="info">Esta página confirma que o serviço está rodando no Render.</p>
            <p class="info">
                O link de callback para a API do ML é: 
                <br>
                <span class="callback-url">/callback</span>
            </p>
        </div>
    </body>
    </html>
  `;
  res.send(htmlContent);
});

// ----------------------------------------------------------------------------------
// ROTA 2: A ROTA DE CALLBACK (Webhook) permanece inalterada
app.post('/callback', (req, res) => {
// ...
// ...
         
