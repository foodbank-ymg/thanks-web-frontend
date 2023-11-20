# thanks-web-frontend

フードバンクありがとう Website のフロントエンドです。

<https://thankyou.fbyamaguchi.org/>

> [!IMPORTANT]
> おたよりの投稿とデータ管理はバックエンドで行なっています。
> 実際にサービスとして提供するには、バックエンドを含めた Web 環境の構築が必要です。

<https://github.com/foodbank-ymg/thanks-web-backend/>

## ローカル環境

[Nodejs](https://nodejs.org/)と [yarn](https://yarnpkg.com/) をインストールしてください。

依存パッケージをインストールした後、ローカル実行します。

```shell
yarn
yarn dev
```

<http://localhost:3000> で確認できます。おたよりはダミーデータです。

## Web サービス環境

[Firebase](https://firebase.google.com/) の Hosting を使います。

2 つの Firebase 環境（開発用/本番用）を前提とした GitHub Actions の自動リリースを組んでいます。

- `develop`ブランチにマージすると、開発環境に自動リリース
- `main`ブランチにマージすると、本番環境に自動リリース

Firebase が準備できたら、GitHub Actions に各種シークレット変数を登録してください。

## ライセンス

このプロジェクトは GNU Affero General Public License v3.0（AGPL-3.0）の条件の下でライセンスされています。

詳細については、このリポジトリの[LICENSE](LICENSE)ファイルをご覧ください。
