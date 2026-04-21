import { VideoResponseDto } from '../dto/video.response.dto';
import { YoutubeVideo } from '../infrastructure/youtube-video.interface';
import { DateUtil } from './date.util';
import { HypeCalculator } from './hype-calculator';

export class VideoMapper {
  static toResponse(video: YoutubeVideo): VideoResponseDto {
    return {
      thumbnail: video.snippet?.thumbnails?.high?.url ?? null,
      title: video.snippet?.title ?? 'Sin título',
      author: video.snippet?.channelTitle ?? 'Desconocido',
      publishedAt: DateUtil.getRelativeTime(video.snippet?.publishedAt),
      hype: HypeCalculator.calculate(video),
    };
  }
}
