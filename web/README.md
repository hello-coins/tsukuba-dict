# 筑波大学用語辞典 WEB 版

## 推奨環境

- Bun > 1.3.1
- Visual Studio Code

## 構成

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── components
│   │   └── Idiom.astro <--1単語のコンポーネント
│   ├── layouts
│   │   └── Layout.astro
│   ├── pages
│   │   └── index.astro
│   └── data
│       └── idioms.json <--load.tsで生成される単語一覧
├── package.json
└── load.ts             <-main.csvから単語一覧のJsonを生成する
```

## コマンド一覧

All commands are run from the root of the project, from a terminal:

| Command               | Action                                       |
| :-------------------- | :------------------------------------------- |
| `bun install`         | Installs dependencies                        |
| `bun load.ts`         | main.csv から単語一覧の Json を生成する      |
| `bun run dev`         | Starts local dev server at `localhost:4321`  |
| `bun run build`       | Build your production site to `./dist/`      |
| `bun run preview`     | Preview your build locally, before deploying |
| `bun run test`        | Test your Astro project                      |
| `bun run fmt`         | Format your code with Prettier               |
| `bun astro -- --help` | Get help using the Astro CLI                 |

## `web`の開発環境の構築方法

WEB 版の開発環境を構築するには、以下の手順を実行してください。

- 非Nixユーザの場合

1. `bun`をインストールします。

2. `web`ディレクトリに移動します。

3. 依存関係をインストールします。

   ```sh
   bun install
   ```

4. 開発サーバーを起動します。

   ```sh
   bun dev
   ```

- Nixユーザの場合

flakeの`devShell`を利用して開発環境を構築します。

また、`nix-direnv`を利用できるようにしておくと便利です。
(`nix-direnv`が導入されている前提で、環境を用意しています。)
