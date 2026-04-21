import { Injectable } from '@nestjs/common';
import { VideosRepository } from '../../infrastructure/videos.repository';

@Injectable()
export class VideosService {
  constructor(private readonly videosRepository: VideosRepository) {}

  getVideos(): any {
    return this.videosRepository.getRawVideos();
  }
}
