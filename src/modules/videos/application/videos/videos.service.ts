import { Injectable } from '@nestjs/common';
import { VideosRepository } from '../../infrastructure/videos.repository';
import { VideoMapper } from '../../domain/video.mapper';
import { VideoResponseDto } from '../../dto/video.response.dto';

@Injectable()
export class VideosService {
  constructor(private readonly videosRepository: VideosRepository) {}

  getVideos(): VideoResponseDto[] {
    const rawVideos = this.videosRepository.getRawVideos();

    const processed = rawVideos.map((video) => VideoMapper.toResponse(video));

    return processed.sort((a, b) => b.hype - a.hype);
  }
}
