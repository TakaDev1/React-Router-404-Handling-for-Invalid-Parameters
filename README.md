# React-Router-404-Handling-for-Invalid-Parameters

React Routerを使用して、URLパラメータに存在しない記事IDが指定された場合に、404ページを表示する練習アプリです。

## 目次

- [概要](#概要)
- [問題](#問題)
- [学習内容](#学習内容)
- [URL](#url)
- [ディレクトリ構成](#ディレクトリ構成)
- [実装内容](#実装内容)
- [処理の流れ](#処理の流れ)
- [確認方法](#確認方法)
- [使用技術](#使用技術)
- [まとめ](#まとめ)

## 概要

`/article/:id` のURLパラメータから記事IDを取得し、記事データに存在するIDであれば記事タイトルを表示します。

存在しないIDが指定された場合は、`NotFound`ページを表示します。

## 問題

以下の条件で記事ページを作成します。

- `/article/:id` にアクセスする
- URLパラメータから記事IDを取得する
- 記事データをオブジェクトで定義する
- 存在する記事IDの場合は記事タイトルを表示する
- 存在しない記事IDの場合は404ページを表示する
- 404メッセージにTailwind CSSの`text-red-500`を使用する

### URL例

```text
/article/1
/article/2
/article/3
```

存在しないIDの場合：

```text
/article/999
```

## 学習内容

- `useParams`
- URLパラメータの取得
- `Number()`による文字列から数値への変換
- オブジェクトからのデータ検索
- 存在しないデータの判定
- 404ページの表示
- React Routerの動的ルーティング
- Tailwind CSS

## URL

| URL | 結果 |
|---|---|
| `/article/1` | React Router入門 |
| `/article/2` | Nested Routesについて |
| `/article/3` | URLパラメータの使い方 |
| `/article/999` | 404 - Article Not Found |

## ディレクトリ構成

```text
src/
├── pages/
│   ├── Article.tsx
│   └── NotFound.tsx
│
├── data/
│   └── ArticlesData.ts
│
├── types/
│   └── ArticleType.ts
│
└── App.tsx
```

### `App.tsx`

React Routerのルーティングを定義します。

```tsx
<Route path="/article/:id" element={<Article />} />
```

`:id`がURLパラメータになります。

### `Article.tsx`

記事IDの取得、記事データの検索、404判定を担当します。

```tsx
const { id } = useParams<"id">();

const articleId = Number(id);
const subjectArticle = Articles[articleId];

if (!subjectArticle) {
  return <NotFound />;
}
```

### `NotFound.tsx`

記事が存在しない場合に表示する404ページです。

```tsx
<h1 className="text-red-500">
  404 - Article Not Found
</h1>
```

### `ArticlesData.ts`

記事データを管理します。

```ts
const Articles: Record<number, Article> = {
  1: {
    id: 1,
    title: "React Router入門",
  },
  2: {
    id: 2,
    title: "Nested Routesについて",
  },
  3: {
    id: 3,
    title: "URLパラメータの使い方",
  },
};

export default Articles;
```

### `ArticleType.ts`

記事データの型を定義します。

```ts
export type Article = {
  id: number;
  title: string;
};
```

## 実装内容

### 1. URLパラメータを取得する

```tsx
const { id } = useParams<"id">();
```

`/article/2` にアクセスした場合、

```text
id = "2"
```

となります。

URLパラメータは文字列として取得されます。

### 2. IDを数値に変換する

```tsx
const articleId = Number(id);
```

```text
"2" → 2
```

に変換します。

### 3. 記事データを検索する

```tsx
const subjectArticle = Articles[articleId];
```

例えば、

```text
articleId = 2
```

の場合、

```tsx
Articles[2]
```

が取得されます。

### 4. 記事が存在するか確認する

```tsx
if (!subjectArticle) {
  return <NotFound />;
}
```

存在する場合：

```text
Articles[2]
↓
記事データ
↓
記事タイトルを表示
```

存在しない場合：

```text
Articles[999]
↓
undefined
↓
NotFoundを表示
```

## 処理の流れ

```text
/article/:id
      ↓
useParams()
      ↓
idを取得
      ↓
Number(id)
      ↓
記事IDを取得
      ↓
Articles[articleId]
      ↓
┌─────────────────┐
│ 記事が存在する？ │
└────────┬────────┘
         │
    ┌────┴────┐
    ↓         ↓
   Yes        No
    ↓         ↓
タイトル表示  NotFound表示
```

## 確認方法

開発サーバーを起動します。

```bash
npm run dev
```

### 存在する記事

ブラウザで以下にアクセスします。

```text
/article/1
```

表示：

```text
Title: React Router入門
```

```text
/article/2
```

表示：

```text
Title: Nested Routesについて
```

### 存在しない記事

```text
/article/999
```

表示：

```text
404 - Article Not Found
```

404メッセージには`text-red-500`が適用されます。

## 使用技術

- React
- TypeScript
- React Router
- Tailwind CSS
- Vite

## まとめ

この練習では、React Routerの動的ルーティングとURLパラメータを使用して、存在するデータと存在しないデータを判定する処理を実装しました。

特に重要なポイントは以下です。

```tsx
const { id } = useParams<"id">();
```

URLパラメータを取得し、

```tsx
const articleId = Number(id);
```

数値に変換した後、

```tsx
const subjectArticle = Articles[articleId];
```

記事データを検索します。

そして、

```tsx
if (!subjectArticle) {
  return <NotFound />;
}
```

によって、存在しない記事IDを404ページとして処理します。