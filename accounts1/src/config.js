import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 服务器监听信息
const server = {
    host: 'localhost',
    port: 80
};

const database = {
    host: 'localhost', // 数据库服务器地址
    user: 'root', // 数据库用户名
    password: '1', // 数据库密码
    databaseName: 'accounts_db' // 数据库名
}

const config = {
    __dirname,
    server,
    database
}

export default config;