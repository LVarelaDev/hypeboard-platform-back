import { Module } from '@nestjs/common';
import { VideosController } from './videos.controller';
import { VideosService } from './application/videos/videos.service';
import { VideosRepository } from './infrastructure/videos.repository';

@Module({
  controllers: [VideosController],
  providers: [VideosService, VideosRepository],
})
export class VideosModule {}
