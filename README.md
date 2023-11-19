# thanks-web-frontend

フードバンクありがとう Website のフロントエンドです。

<https://thankyou.fbyamaguchi.org/>

## ローカル環境

[Nodejs](https://nodejs.org/)と [yarn](https://yarnpkg.com/) をインストールしてください。

依存パッケージをインストールした後、ローカル実行します。

```shell
yarn
yarn dev
```

<http://localhost:3000> で確認できます。おたよりはダミーデータです。

## Web サービス環境

インターネット上で Web サービスとして稼働させるには、[Firebase](https://firebase.google.com/) を使います。

2 つの Firebase 環境（開発用/本番用）を前提とした GitHub Actions の自動リリースを組んでいます。

- `develop`ブランチにマージすると、開発環境に自動リリース
- `main`ブランチにマージすると、本番環境に自動リリース

Firebase が準備できたら、GitHub Actions にシークレット変数を登録してください。

> [!IMPORTANT]
> Web サービスの稼働には、バックエンドの構築も必要です。こちらを参照してください。

<https://github.com/foodbank-ymg/thanks-web-backend/>
