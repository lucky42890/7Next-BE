import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokesModule } from './pokes/pokes.module';

@Module({
  imports: [PokesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
