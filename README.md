![main-hero](https://user-images.githubusercontent.com/57612617/185059009-5c053f10-527e-44da-8b15-10192821cd38.png)

# Vite with Eleventy

ViteとEleventyによる最小限のサンプルプロジェクトです。

この環境では以下の開発体験を提要します。

- Eleventyを使用したSSG
- Viteを使用したJSとアセットファイルのバンドラー

## 特徴

- EleventyとViteは別々に実行されます
- デフォルトでは、ViteがHTMLを制御します。しかしEleventyと統合したことで、HTML生成の責務はEleventyパイプラインにあります。

**続きを空いた時間にまとめて書く**

|外部ライブラリ|バージョン|詳細|
|:---|:---|:---|
|[@11ty/eleventy](https://github.com/11ty/eleventy/)|^0.12.1|静的サイトジェネレーターでHTMLを生成します|
|[cross-env](https://github.com/kentcdodds/cross-env/)|^7.0.3|環境変数を利用するためのパッケージ|
|[Vite](https://github.com/vitejs/vite/tree/main/)|^2.6.4|sass・typescriptのバニラで構築してます|
