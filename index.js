const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ----------------------------------------------------------------------------------
// ROTA PRINCIPAL: Página de Status da 3R MOTO PEÇAS com Fundo Personalizado
// ----------------------------------------------------------------------------------
app.get("/", (req, res) => {
  const LOGO_IMAGE_URL = 'https://placehold.co/1000x1000/1C1C1C/FFFFFF?text=3R+MOTO+PECAS+ONLINE'; 
  
  res.send(`
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3R MOTO PEÇAS - Webhook Ativo</title>
    <style>
      body {
        margin: 0;
        font-family: "Inter", sans-serif;
        background-color: #1a1a1a;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow: hidden;
        color: #f0f0f0;
        position: relative;
      }
      .background-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('${LOGO_IMAGE_URL}');
        background-size: cover;
        background-position: center;
        opacity: 0.1;
        filter: blur(5px);
        transition: opacity 1s;
      }
      .container {
        text-align: center;
        padding: 40px;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 16px;
        backdrop-filter: blur(10px);
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
        z-index: 10;
        max-width: 90%;
      }
      h1 {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 5px;
        text-transform: uppercase;
        text-shadow: 0 0 10px #00BFFF, 0 0 20px #00BFFF;
      }
      h2 {
        font-size: 1.25rem;
        font-weight: 400;
        margin-top: 5px;
        color: #ddd;
      }
      .status-box {
        margin: 30px 0;
        padding: 15px 25px;
        border: 2px solid #00ff80;
        border-radius: 8px;
        background: rgba(0, 255, 128, 0.1);
        box-shadow: 0 0 15px #00ff80;
      }
      .status-text {
        font-size: 1.5rem;
        color: #00ff80;
        font-weight: 700;
      }
      button {
        margin-top: 20px;
        padding: 12px 30px;
        font-size: 1.1rem;
        border: none;
        border-radius: 30px;
        background: #FF4500;
        color: #1a1a1a;
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: 0 0 15px #FF4500;
        font-weight: 600;
      }
      button:hover {
        background: #FF6347;
        transform: scale(1.05);
        box-shadow: 0 0 20px #FF6347;
      }
      footer {
        position: absolute;
        bottom: 15px;
        font-size: 0.8rem;
        color: #999;
        z-index: 10;
      }
    </style>
  </head>
  <body>
    <div class="background-image"></div>
    <div class="container">
      <h1>3R MOTO PEÇAS</h1>
      <h2>Plataforma de Integração e Automação</h2>
      <div class="status-box">
        <div class="status-text">✅ WEBHOOK RECEIVER ATIVO!</div>
      </div>
      <p style="color: #ccc; margin-top: 10px;">
        Este serviço está rodando no Render e pronto para receber notificações do Mercado Livre (ML).
      </p>
      <button onclick="window.location.href='/auth'">Autenticar com Mercado Livre</button>
    </div>
    <footer>© 2025 3R Moto Peças - Todos os direitos reservados</footer>
  </body>
  </html>
  `);
});

// ----------------------------------------------------------------------------------
// ROTA DE AUTENTICAÇÃO: Redireciona para o Mercado Livre
// ----------------------------------------------------------------------------------
app.get("/auth", (req, res) => {
  const redirectUri = "https://sua-app.onrender.com/callback"; // Substitua pela sua URL real
  const clientId = process.env.CLIENT_ID;
  const authUrl = `https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
  res.redirect(authUrl);
});

// ----------------------------------------------------------------------------------
// ROTA DE CALLBACK: Recebe o code e troca pelo token
// ----------------------------------------------------------------------------------
app.get("/callback", async (req, res) => {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send("Código de autorização não recebido.");
  }

  try {
    const response = await fetch("https://api.mercadolibre.com/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code: code,
        redirect_uri: "https://sua-app.onrender.com/callback" // Substitua pela sua URL real
      })
    });

    const data = await response.json();

    if (data.access_token) {
      console.log("✅ TOKEN RECEBIDO:", data);
      res.send(`
        <h2>Token recebido com sucesso!</h2>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      `);
    } else {
      console.error("❌ Erro ao obter token:", data);
      res.status(500).send("Erro ao obter token.");
    }
  } catch (error) {
    console.error("❌ Erro na requisição:", error);
    res.status(500).send("Erro interno ao processar o token.");
  }
});

// ----------------------------------------------------------------------------------
// ROTA DE WEBHOOK DO MERCADO LIVRE
// ----------------------------------------------------------------------------------
app.post("/webhook", (req, res) => {
  const topic = req.body.topic; 
  const resource = req.body.resource; 

  console.log(`--- NOTIFICAÇÃO WEBHOOK RECEBIDA ---`);
  console.log(`TÓPICO: ${topic}`);
  console.log(`RECURSO: ${resource}`);
  console.log(`CORPO COMPLETO:`, req.body);
  console.log(`------------------------------------`);

  res.status(200).send("Notificação recebida com sucesso.");
});

// ----------------------------------------------------------------------------------
// INICIALIZAÇÃO DO SERVIDOR
// ----------------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`🚀 Servidor 3R MOTO PEÇAS rodando na porta ${PORT}`);
});
