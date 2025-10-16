const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plataforma GSR</title>
    <style>
      body {
        margin: 0;
        font-family: "Poppins", sans-serif;
        background: linear-gradient(135deg, #f8f9fa, #e9ecef);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow: hidden;
      }

      .container {
        text-align: center;
        animation: fadeIn 2s ease;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .logo {
        font-size: 72px;
        font-weight: 900;
        color: #333;
        text-transform: uppercase;
        position: relative;
        display: inline-block;
        animation: rotate3D 6s linear infinite;
        transform-style: preserve-3d;
      }

      .logo::before {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        color: #bbb;
        transform: translateZ(-15px);
      }

      @keyframes rotate3D {
        0% { transform: rotateY(0deg); text-shadow: 3px 3px 6px rgba(0,0,0,0.2); }
        50% { transform: rotateY(180deg); text-shadow: -3px 3px 6px rgba(0,0,0,0.3); }
        100% { transform: rotateY(360deg); text-shadow: 3px 3px 6px rgba(0,0,0,0.2); }
      }

      h2 {
        color: #444;
        margin-top: 20px;
        font-weight: 500;
      }

      button {
        margin-top: 40px;
        padding: 12px 28px;
        font-size: 16px;
        border: none;
        border-radius: 30px;
        background: #007bff;
        color: white;
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }

      button:hover {
        background: #0056b3;
        transform: scale(1.07);
      }

      footer {
        position: absolute;
        bottom: 10px;
        font-size: 14px;
        color: #777;
      }

      @media (max-width: 600px) {
        .logo { font-size: 54px; }
        h2 { font-size: 18px; }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="logo" data-text="GSR">GSR</div>
      <h2>Bem-vindo à sua plataforma inteligente</h2>
      <button onclick="alert('Em breve novas funcionalidades!')">Explorar</button>
    </div>
    <footer>© 2025 Gleison Santos Ribeiro - Todos os direitos reservados</footer>
  </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
