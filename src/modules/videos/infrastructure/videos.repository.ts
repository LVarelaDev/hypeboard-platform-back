import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { VideoDTO } from '../dto/video.dto';

@Injectable()
export class VideosRepository {
  getRawVideos(): VideoDTO[] {
    const filePath = path.join(process.cwd(), 'src/data/mock-youtube-api.json');
    const file = fs.readFileSync(filePath, 'utf-8');
    const dataParsed = JSON.parse(file) as { items: VideoDTO[] };
    return dataParsed.items;
  }
}
