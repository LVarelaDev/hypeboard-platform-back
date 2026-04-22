import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideosController } from './modules/videos/videos.controller';
import { VideosRepository } from './modules/videos/infrastructure/videos.repository';
import { VideosService } from './modules/videos/application/videos/videos.service';

@Module({
  imports: [],
  controllers: [AppController, VideosController],
  providers: [AppService, VideosService, VideosRepository],
})
export class AppModule {}
