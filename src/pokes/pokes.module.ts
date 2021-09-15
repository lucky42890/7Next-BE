import { Module } from '@nestjs/common';
import { PokesController } from './pokes/pokes.controller';

@Module({
  controllers: [PokesController]
})
export class PokesModule {}
