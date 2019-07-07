import { configure, getLogger } from 'log4js';
import { join } from 'path';

configure({
  appenders: {
    ruleFile: {
      type: 'dateFile',
      filename: join(__dirname, '../log/server-'),
      pattern: 'yyyy-MM-dd.log',
      maxLogSize: 10 * 1000 * 1000,
      numBackups: 3,
      alwaysIncludePattern: true
    }
  },

  categories: {
    default: { appenders: ['ruleFile'], level: 'info' }
  }
});

export default class LogRecord {
  static init (app) {
    app.use(async (ctx, next) => {
      getLogger('ruleFile').info(ctx.request);
      await next();
    });
  }
};