# Description
> This is full stack cli for developers to start their project quickly

# Technology Stack
- server
	- koa2
	- log4js
	- koa-router
	- gulp

- middleware
	- express
	- http-proxy-middleware
	- gulp

- middleware-koa2
	- koa2
	- http-proxy-middleware
	- gulp
	
- client
	- react
	- react-router
	- redux
	- jest
	- webpack
	- axios
	- sass

# How to start

## For development mode
```text
cd client
npm run dev

cd middleware
npm run dev
npm run start

// cd middleware-koa2
// npm run dev
// npm run start

cd server
npm run dev
npm run start
```

## For production mode
```text
cd client
npm run build

cd middleware
npm run build
node dist/src/app.js

// cd middleware-koa2
// npm run build
// node dist/src/app.js

cd server
npm run build
node dist/src/app.js
```

# Contact
> If you have any question, please feel free to contact me.

- QQ: 503158245
- Email: xianweics@163.com
