# Hello Framework

これは[Observable Framework](https://observablehq.com/framework)プロジェクトです。ローカル・プレビュー・サーバーを起動するには、以下を実行します：

```
npm run dev
```

その後、<http://localhost:3000>にアクセスしてプロジェクトをプレビューしてください。

詳しくは<https://observablehq.com/framework/getting-started>をご覧ください。
## Project structure

典型的なフレームワークのプロジェクトは次のようになります：

```ini
.
├─ docs
│  ├─ components
│  │  └─ timeline.js           # インポート可能なモジュール
│  ├─ data
│  │  ├─ launches.csv.js       # データローダー
│  │  └─ events.json           # 静的データファイル
│  ├─ example-dashboard.md     # ページ
│  ├─ example-report.md        # 別ページ
│  └─ index.md                 # ホームページ
├─ .gitignore
├─ observablehq.config.ts      # プロジェクト設定ファイル
├─ package.json
└─ README.md
```

**docs`** - これは "ソースルート "です。ページはここに入ります。各ページはMarkdownファイルです。Observable Frameworkは[file-based routing](https://observablehq.com/framework/routing)を使用します。つまり、ファイル名によってページが提供される場所が制御されます。好きなだけページを作成することができます。フォルダを使用してページを整理してください。

**`docs/index.md`** - これはあなたのサイトのトップページです。追加ページはいくつでも作れますが、トップページは必ず作るべきです。

**`docs/data`** - [data loaders](https://observablehq.com/framework/loaders)や静的データファイルはソースルートのどこにでも置くことができますが、ここに置くことをお勧めします。

**docs/components`** - 共有[JavaScriptモジュール](https://observablehq.com/framework/javascript/imports)はソースルートのどこにでも置くことができますが、ここに置くことをお勧めします。これにより、MarkdownファイルからJavaScriptモジュールにコードを引き出すことができ、ページ間でコードを再利用したり、テストを書いたり、リンターを実行したり、バニラウェブアプリケーションとコードを共有したりすることが簡単になります。

**`observablehq.config.ts`** - サイドバーナビゲーションのページやセクション、プロジェクトのタイトルなど、[プロジェクト設定](https://observablehq.com/framework/config)ファイルです。

## Command reference

| Command           | Description                                              |
| ----------------- | -------------------------------------------------------- |
| `npm install`            | 依存関係のインストールまたは再インストール                        |
| `npm run dev`        | ローカルプレビューサーバーの起動                               |
| `npm run build`      | 静的サイトの構築、生成 `./dist`              |
| `npm run deploy`     | プロジェクトをObservableにデプロイする                        |
| `npm run clean`      | ローカル・データ・ローダーのキャッシュをクリアする                        |
| `npm run observable` | 次のようなコマンドを実行する。 `observable help`                      |
