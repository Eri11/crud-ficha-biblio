import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

// definimos la ruta
const crPath = './ssl/certificate.crt';
const pkPath = './ssl/private.key';
const options: any = {};
// validamos si los archivos existen
if (fs.existsSync(crPath) && fs.existsSync(pkPath)) {
  // cargamos los archivos sobre las options
  options.httpsOptions = {
    cert: fs.readFileSync(crPath),
    key: fs.readFileSync(pkPath),
  };
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, options);
  app.enableCors();
  await app.listen(443);

  const app2 = await NestFactory.create(AppModule);
  app2.enableCors();
  await app2.listen(80);
}
bootstrap();
