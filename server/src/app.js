import Koa from 'koa';
import route from './route';

import config from './config';

const app = new Koa();
route.init(app);

app.listen(config.port);