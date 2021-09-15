import { Test, TestingModule } from '@nestjs/testing';
import { PokesController } from './pokes.controller';

describe('PokesController', () => {
  let controller: PokesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokesController],
    }).compile();

    controller = module.get<PokesController>(PokesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
