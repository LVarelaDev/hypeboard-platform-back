import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { YoutubeVideo } from './youtube-video.interface';

@Injectable()
export class VideosRepository {
  getRawVideos(): YoutubeVideo[] {
    const filePath = path.join(process.cwd(), 'src/data/mock-youtube-api.json');
    const file = fs.readFileSync(filePath, 'utf-8');
    const dataParsed = JSON.parse(file) as { items: YoutubeVideo[] };
    return dataParsed.items;
  }
}
