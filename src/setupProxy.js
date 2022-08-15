const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = {
  target: "https://www.apis.data.go.kr",
  changeOrigin: true,
}
module.exports = (app) => {
	app.use(
    '/api',
  createProxyMiddleware(proxy));
};