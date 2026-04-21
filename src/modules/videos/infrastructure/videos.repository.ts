import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class VideosRepository {
  getRawVideos(): any {
    const filePath = path.join(process.cwd(), 'src/data/youtube.mock.json');
    const file = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(file);
  }
}
