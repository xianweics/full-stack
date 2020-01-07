import KoaRouter from 'koa-router';
import controller from '../controller';
import logRecord from './logRecord';

const router = new KoaRouter();

const routes = router.get('/users', controller.getUsers)
  .get('/members', controller.getMembers);

export default class Route {
  static init (app) {
    logRecord.init(app);
    app.use(routes.routes());
    app.use(async (ctx, next) => {
      console.info(ctx.url);
      await next();
    });
  }
}
