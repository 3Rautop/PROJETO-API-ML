const express = require('express');
const app = express();

// O Render define a porta na variável de ambiente PORT
const PORT = process.env.PORT || 3000;

// Configura o middleware para receber JSON no corpo da requisição (necessário para webhooks)
app.use(express.json());

// ----------------------------------------------------------------------------------
// ROTA 1: Rota Raiz (apenas para testar se o app está no ar)
// Quando você acessar a URL principal do Render no navegador, esta mensagem aparecerá.
app.get('/', (req, res) => {
  res.send('Servidor de Webhook do Mercado Livre está rodando!');
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
