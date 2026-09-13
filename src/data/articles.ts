export interface Article {
  id: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  url: string;
  platform: string;
}

// Add future articles here — the Articles section renders this list
// automatically and falls back to an empty state when it's empty.
export const articles: Article[] = [];
