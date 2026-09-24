import type { Article } from "../types/ArticleType";

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

export default { Articles };
