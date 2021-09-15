import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PokesController } from './pokes.controller';
import { PokesService } from './pokes.service';

@Module({
  imports: [HttpModule],
  controllers: [PokesController],
  providers: [PokesService]
})
export class PokesModule {}
