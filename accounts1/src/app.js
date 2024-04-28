import router from './routes/route.js';
import config from './config.js';

import express from 'express';
import { resolve } from 'node:path';

const app = express();
const publicPath = resolve(config.__dirname, '..', 'public');
const viewsPath = resolve(config.__dirname, 'views');

// 模板
app.set('view engine', 'ejs');
app.set('views', viewsPath);

// 解析表单数据
app.use(express.urlencoded({ extended: false }));

// 路由
app.use(router)

// 静态资源
app.use(express.static(publicPath));

export default app;