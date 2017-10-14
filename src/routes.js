import { name, version } from '../package.json';
import Router from 'koa-router';

const router = new Router();

/**
 * GET /
 */
router.get('/', async ctx => {
  ctx.body = {
    app: name,
    version: version
  };
});

export default router;
