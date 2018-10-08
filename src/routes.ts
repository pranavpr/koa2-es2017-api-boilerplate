import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as pkgJson from '../package.json';

const router: Router = new Router();
const appName: string = pkgJson.name;
const appVersion: string = pkgJson.version;

router.get('/', async (ctx: Koa.Context) => {
  ctx.body = {
    app: appName,
    version: appVersion,
  };
});

export default router;
