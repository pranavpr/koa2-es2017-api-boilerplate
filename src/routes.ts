import * as Koa from 'koa';
import * as Router from 'koa-router';
import { name, version } from '../package.json';

const router = new Router();

/**
 * GET /
 */
router.get('/', async (ctx: Koa.Context) => {
  ctx.body = {
    app: name,
    version: version,
  };
});

export default router;
