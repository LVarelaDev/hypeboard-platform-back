export interface VideoResponseDto {
  thumbnail: string | null;
  title: string;
  author: string;
  publishedAt: string;
  hype: number;
  isCrown: boolean;
}

export interface PaginatedVideosResponseDto {
  data: VideoResponseDto[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
