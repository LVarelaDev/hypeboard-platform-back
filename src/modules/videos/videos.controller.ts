import { Controller, Get } from '@nestjs/common';
import { VideosService } from './application/videos/videos.service';

@Controller('api/videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Get()
  getVideos(): any {
    return this.videosService.getVideos();
  }
}
