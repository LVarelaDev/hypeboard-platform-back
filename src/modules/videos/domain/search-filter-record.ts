import { SearchField } from '../application/videos/videos.service';
import { YoutubeVideo } from '../infrastructure/youtube-video.interface';

export const searchFilters: Record<
  SearchField,
  (video: YoutubeVideo, value: string) => boolean
> = {
  title: (video: YoutubeVideo, value: string) =>
    video.snippet.title.toLowerCase().includes(value.toLowerCase()),

  author: (video: YoutubeVideo, value: string) =>
    video.snippet.channelTitle.toLowerCase().includes(value.toLowerCase()),
};
