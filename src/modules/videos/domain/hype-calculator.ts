import { YoutubeVideo } from '../infrastructure/youtube-video.interface';

export class HypeCalculator {
  static calculate(video: YoutubeVideo): number {
    const stats = video.statistics;
    const INITIAL_HYPE = 0; //valor por defecto del hype (se puede obtener de una configuración externa)

    if (!stats || !stats.commentCount) return INITIAL_HYPE;

    const views = Number(stats.viewCount ?? INITIAL_HYPE);
    const likes = Number(stats.likeCount ?? INITIAL_HYPE);
    const comments = Number(stats.commentCount ?? INITIAL_HYPE);

    if (views === INITIAL_HYPE) return INITIAL_HYPE;

    let hype = (likes + comments) / views;

    if (video.snippet.title.toLowerCase().includes('tutorial')) {
      hype *= 2;
    }

    return Number(hype.toFixed(5));
  }
}
