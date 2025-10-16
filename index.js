const express = require('express');
const app = express();

// O Render define a porta na variável de ambiente PORT
const PORT = process.env.PORT || 3000;

// Configura o middleware para receber JSON no corpo da requisição (necessário para webhooks)
app.use(express.json());

// ----------------------------------------------------------------------------------
// ROTA 1: Rota Raiz (Página de Teste Visual)
// A URL principal agora mostra uma página personalizada e formatada.
app.get('/', (req, res) => {
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
            }
            h1 {
                font-size: 3.5em; /* Letras ainda maiores */
                color: #000000; /* Preto forte */
                margin-bottom: 5px;
                text-transform: uppercase; /* Coloca em maiúsculas */
                letter-spacing: 3px; /* Espaçamento entre letras */
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
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>3R MOTO PEÇAS</h1>
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
// ROTA 2: A ROTA DE CALLBACK (Webhook) que você usará no Mercado Livre.
// O Mercado Livre envia notificações via POST.
// MANTENHA O CAMINHO SIMPLES, como /callback
app.post('/callback', (req, res) => {
  console.log('--- NOTIFICAÇÃO DO MERCADO LIVRE RECEBIDA ---');
  // O corpo da notificação (payload)
  console.log('Corpo (Body):', req.body); 
  
  // Você pode adicionar sua lógica de processamento aqui (ex: salvar no BD, processar dados)
  
  // É CRUCIAL retornar um status 200 OK rapidamente para o Mercado Livre
  // para confirmar que a notificação foi recebida com sucesso.
  res.sendStatus(200); 
});

// ----------------------------------------------------------------------------------

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
