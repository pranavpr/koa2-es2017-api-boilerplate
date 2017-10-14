import Koa from 'koa';
import cors from '@koa/cors';
import logger from 'koa-morgan';
import bodyParser from 'koa-bodyparser';
import router from './routes';

const app = new Koa();

// Set middlewares
app.use(
  bodyParser({
    enableTypes: ['json', 'form'],
    formLimit: '10mb',
    jsonLimit: '10mb'
  })
);

// Logger
app.use(
  logger('dev', {
    skip: () => app.env === 'test'
  })
);

// Enable CORS
app.use(cors());

// Default error handler middleware
app.use(async (ctx, next) => {
  try {
    await next();
    if (ctx.status === 404) {
      ctx.throw(404);
    }
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      statusCode: ctx.status,
      message: err.message
    };
    ctx.app.emit('error', err, ctx);
  }
});

// Routes
app.use(router.routes());

export default app;
