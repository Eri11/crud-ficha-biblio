import { Module } from '@nestjs/common';
import { FichaService } from './ficha.service';
import { FichaController } from './ficha.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FichaSchema } from './ficha.model';
@Module({
  imports:[
    MongooseModule.forFeature([{name:'Ficha', schema: FichaSchema}])
  ],
  controllers: [FichaController],
  providers: [FichaService]
})
export class FichaModule {}
