# ベースイメージとしてNode.jsを使用
FROM node:18

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# 依存関係をインストール
COPY package*.json ./
RUN npm install

# TypeScriptをビルド
COPY . .
RUN npm run build

# ポートを開放
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "start"]
