
// 执行入口
import app from "./app.js";
import config from "./config.js";
import { Accounts, authenticateDatabase } from "./models/accountsModel.js";

authenticateDatabase()
.then(() => {
    console.log('数据库连接成功');
})
.catch((err) => {
    console.error('数据库连接失败：', err);
    process.exit(1)
})

// 同步 Accounts 模型，表结构不存在会自动创建
Accounts.sync()

app.listen(config.server.port, config.server.host, () => {
    console.log(`Server is running on http://${config.server.host}:${config.server.port}${config.baseUrl}`);
});

process.on('uncaughtException', (err) => {
    console.error('未捕获的异常：', err);
    process.exit(1);
});