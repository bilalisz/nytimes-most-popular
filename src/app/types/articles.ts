export interface Article {
  id: number;
  title: string;
  abstract: string;
  url: string;
  published_date: string;
  section: string;
  byline: string;
  media: {
    "media-metadata": {
      url: string;
    }[];
  }[];
}

export interface ApiResponse {
  status: string;
  copyright: string;
  num_results: number;
  results: Article[];
}
