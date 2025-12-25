# 筑波大学用語辞典 WEB 版

## 推奨環境

- Bun > 1.3.1
- Visual Studio Code

## 構成

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── components
│   │   └── Ideom.astro <--1単語のコンポーネント
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│   │   └── index.astro
│   └── data
│       └── idioms.json <--load.tsで生成される単語一覧
└── package.json
└── load.ts             <-main.csvから単語一覧のJsonを生成する
```

## コマンド一覧

All commands are run from the root of the project, from a terminal:

| Command               | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `bun install`         | Installs dependencies                            |
| `bun load.ts`         | main.csv から単語一覧の Json を生成する          |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |
