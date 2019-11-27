const Koa = require('koa');
const bodyParser = require('koa-body');
const cors = require('@koa/cors');
const routes = require('./router');
const config = require('./config');

const app = new Koa();

app.use(
  cors({
    origin: '*',
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
    allowHeaders: ['Content-Type', 'Authorization', 'token', 'id'],
    exposeHeaders: ['Content-Length', 'Date', 'X-Request-Id'],
  })
);
app.use(
  bodyParser({
    formLimit: '10mb',
    jsonLimit: '10mb',
    multipart: true,
    formidable: {
      keepExtensions: true,
    },
  })
);

app.use(routes);

app.listen(config.port, () => {
  console.log(config.port);
}); 