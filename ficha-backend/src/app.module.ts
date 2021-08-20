import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FichaModule } from './ficha/ficha.module';
@Module({
  imports: [
    FichaModule,
    MongooseModule.forRoot(`//mongodb://localhost:27017/biblioteca`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
