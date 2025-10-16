const express = require("express");
const app = express();
// Usa a porta definida pelo ambiente (Render) ou 3000 como fallback
const PORT = process.env.PORT || 3000;

// Middleware para analisar corpos de requisição JSON, necessário para webhooks
app.use(express.json()); 

// ----------------------------------------------------------------------------------
// ROTA PRINCIPAL: Página de Status da 3R MOTO PEÇAS com Fundo Personalizado
// ----------------------------------------------------------------------------------
app.get("/", (req, res) => {
  // ATENÇÃO: SUBSTITUA ESTA URL PELA URL REAL DA SUA IMAGEM (e.g., JPEG 3R)
  const LOGO_IMAGE_URL = 'https://placehold.co/1000x1000/1C1C1C/FFFFFF?text=3R+MOTO+PECAS+ONLINE'; 
  
  res.send(`
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3R MOTO PEÇAS - Webhook Ativo</title>
    <style>
      :root {
        --neon-blue: #00BFFF;
        --neon-orange: #FF4500;
        --dark-bg: #1a1a1a;
        --text-color: #f0f0f0;
        --status-ok: #00ff80;
      }
      body {
        margin: 0;
        font-family: "Inter", sans-serif;
        background-color: var(--dark-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow: hidden;
        color: var(--text-color);
        position: relative;
      }

      /* Estilo para a imagem de fundo (usando a imagem 3D que você enviou) */
      .background-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('${LOGO_IMAGE_URL}');
        background-size: cover;
        background-position: center;
        opacity: 0.1; /* Deixa a imagem mais sutil, como um fundo */
        filter: blur(5px);
        transition: opacity 1s;
      }

      .container {
        text-align: center;
        padding: 40px;
        background: rgba(0, 0, 0, 0.7); /* Fundo escuro semi-transparente */
        border-radius: 16px;
        backdrop-filter: blur(10px);
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
        z-index: 10;
        animation: slideIn 1.5s ease-out;
        max-width: 90%;
      }

      @keyframes slideIn {
        from { opacity: 0; transform: translateY(-50px); }
        to { opacity: 1; transform: translateY(0); }
      }

      h1 {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 5px;
        text-transform: uppercase;
        color: var(--text-color);
        text-shadow: 0 0 10px var(--neon-blue), 0 0 20px var(--neon-blue);
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
        border: 2px solid var(--status-ok);
        border-radius: 8px;
        background: rgba(0, 255, 128, 0.1);
        box-shadow: 0 0 15px var(--status-ok);
      }

      .status-text {
        font-size: 1.5rem;
        color: var(--status-ok);
        font-weight: 700;
      }

      button {
        margin-top: 20px;
        padding: 12px 30px;
        font-size: 1.1rem;
        border: none;
        border-radius: 30px;
        background: var(--neon-orange);
        color: var(--dark-bg);
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: 0 0 15px var(--neon-orange);
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

      @media (max-width: 600px) {
        h1 { font-size: 2rem; }
        h2 { font-size: 1rem; }
        .status-text { font-size: 1.2rem; }
        .container { padding: 30px 20px; }
      }
    </style>
  </head>
  <body>
    <!-- Fundo estilizado com a imagem 3D -->
    <div class="background-image"></div>
    
    <div class="container">
      <h1>3R MOTO PEÇAS</h1>
      <h2>Plataforma de Integração e Automação</h2>
      
      <div class="status-box">
        <div class="status-text">
          ✅ WEBHOOK RECEIVER ATIVO!
        </div>
      </div>
      
      <p style="color: #ccc; margin-top: 10px;">
        Este serviço está rodando no Render e pronto para receber notificações do Mercado Livre (ML).
      </p>

      <button onclick="alert('Funcionalidades de painel em desenvolvimento!')">
        Acessar Painel
      </button>
    </div>
    <footer>© 2025 3R Moto Peças - Todos os direitos reservados</footer>
  </body>
  </html>
  `);
});

// ----------------------------------------------------------------------------------
// ROTA DE WEBHOOK DO MERCADO LIVRE
// Esta rota receberá TODAS as notificações do ML (ordens, perguntas, etc.)
// ----------------------------------------------------------------------------------
app.post("/webhook", (req, res) => {
    const topic = req.body.topic; 
    const resource = req.body.resource; 
    
    // Loga as informações da notificação recebida no console do Render
    console.log(`--- NOTIFICAÇÃO WEBHOOK RECEBIDA ---`);
    console.log(`TÓPICO: ${topic}`);
    console.log(`RECURSO: ${resource}`);
    console.log(`CORPO COMPLETO:`, req.body);
    console.log(`------------------------------------`);

    // Resposta OBRIGATÓRIA (status 200) para o Mercado Livre
    res.status(200).send("Notificação recebida com sucesso.");
});


// ----------------------------------------------------------------------------------
// INICIALIZAÇÃO DO SERVIDOR
// ----------------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`🚀 Servidor 3R MOTO PEÇAS rodando na porta ${PORT}`);
  console.log(`\n\n=== WEBHOOK PRONTO PARA RECEBER NOTIFICAÇÕES DO ML! ===\n\n`);
});
