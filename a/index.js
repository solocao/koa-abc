const Koa = require('koa');
const app = new Koa();

const main = ctx =>{
  ctx.response.type = 'json'
  ctx.response.body = { data : 'Hello World'}
}

// 使用app.use方法加载main函数
app.use(main);
app.listen(3000);