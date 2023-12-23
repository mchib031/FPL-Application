const express = require('express');
const app = express();
const cors = require("cors");
const {createProxyMiddleware} = require("http-proxy-middleware");

app.use(cors());

app.use('/', createProxyMiddleware({ target:'https://fantasy.premierleague.com', changeOrigin: true }));


const port = 3000;
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
