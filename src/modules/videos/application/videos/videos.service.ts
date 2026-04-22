import { Injectable } from '@nestjs/common';
import { paginate } from '../../domain/pagination';
import { searchFilters } from '../../domain/search-filter-record';
import { VideoMapper } from '../../domain/video.mapper';
import { PaginatedVideosResponseDto } from '../../dto/video.response.dto';
import { VideosRepository } from '../../infrastructure/videos.repository';

export type SearchField = 'title' | 'author';

@Injectable()
export class VideosService {
  constructor(private readonly videosRepository: VideosRepository) {}

  getVideos(
    page = 1,
    limit = 10,
    searchField?: SearchField,
    searchValue?: string,
  ): PaginatedVideosResponseDto {
    const rawVideos = this.videosRepository.getRawVideos();
    let rawVideosFiltered = rawVideos;

    if (searchField && searchValue) {
      const filter = searchFilters[searchField];
      rawVideosFiltered = rawVideos.filter((video) =>
        filter(video, searchValue),
      );
    }

    const processed = rawVideosFiltered.map((video) =>
      VideoMapper.toResponse(video),
    );

    const sorted = processed.sort((a, b) => b.hype - a.hype);

    const { data, total, totalPages } = paginate(sorted, page, limit);

    const withCrown = data.map((video, index) => ({
      ...video,
      isCrown: page === 1 && index === 0 && video.hype > 0,
    }));

    return {
      data: withCrown,
      total,
      page,
      limit,
      totalPages,
    };
  }
}
