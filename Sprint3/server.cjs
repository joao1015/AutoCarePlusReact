// server.js (ou server.cjs se estiver usando CommonJS)
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3001; // Porta do servidor proxy

app.use(express.json());

app.use('/api', createProxyMiddleware({
  target: 'https://api.us-south.assistant.watson.cloud.ibm.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remove o prefixo `/api` da URL
  },
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('Authorization', `Basic ${Buffer.from('YOUR_API_KEY:').toString('base64')}`);
  },
}));

app.listen(port, () => {
  console.log(`Servidor proxy rodando na porta ${port}`);
});
