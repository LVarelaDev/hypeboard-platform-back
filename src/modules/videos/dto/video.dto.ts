export interface Thumbnail {
  url: string;
}

export interface Thumbnails {
  high: Thumbnail;
}

export interface Snippet {
  title: string;
  channelTitle: string;
  publishedAt: string;
  thumbnails: Thumbnails;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  commentCount: string;
}

export interface VideoDTO {
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}
