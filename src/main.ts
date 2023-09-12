import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, 
    })
  );

  await app.listen(process.env.PORT);
  console.log(`App running on port ${process.env.PORT}`)
}
bootstrap();

//aca todaiva no esta el modulo de nest, si no la tengo definida me va ad ecir undefiend aunque en el ConfigService(app.service) este puesto que si no viene sea por defecto 3002, todavia no cargo aca.
//aca estamos fuera de los building blocks