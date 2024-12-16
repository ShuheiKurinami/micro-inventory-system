import "reflect-metadata";
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js'; // 必ず拡張子 .js を指定
import pool from './config/db.js'; // 必ず拡張子 .js を指定
dotenv.config();
const app = express();
const port = process.env.PORT || 3001;
// ミドルウェアの設定
app.use(bodyParser.json());
// ルートの設定
app.use('/api/users', userRoutes);
// データベース接続の確認
pool.connect()
    .then(() => {
    console.log('Connected to PostgreSQL');
})
    .catch((err) => {
    console.error('Error connecting to PostgreSQL:', err);
});
// サーバーの起動
app.listen(port, () => {
    console.log(`User service is running on port ${port}`);
});
