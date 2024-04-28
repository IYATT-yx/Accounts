
// 执行入口
import app from "./app.js";
import config from "./config.js";
import getDb from "./database/db.js";

try {
    await getDb().authenticate();
    console.log('成功建立连接。');
} catch (error) {
    console.error('无法连接到数据库：', error);
    process.exit(1);
}

app.listen(config.server.port, config.server.host, () => {
    console.log(`Server is running on http://${config.server.host}:${config.server.port}/accounts`);
});

process.on('uncaughtException', (err) => {
    console.error('未捕获的异常：', err);
    process.exit(1);
});