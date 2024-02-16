import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [MovieController]
})
export class MovieModule {}
