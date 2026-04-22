import { Controller, Get, Query } from '@nestjs/common';
import {
  SearchField,
  VideosService,
} from './application/videos/videos.service';

@Controller('api/videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Get()
  getVideos(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('searchField') searchField?: SearchField,
    @Query('searchValue') searchValue?: string,
  ) {
    return this.videosService.getVideos(
      Number(page) || 1,
      Number(limit) || 10,
      searchField,
      searchValue,
    );
  }
}
