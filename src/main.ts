import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './config/app.module';

var corsOptions = {
  origin: 'http://localhost:8080'
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('AtelierHwf API')
    .setVersion('1.0')
    .addTag('Products')
    .addTag('Categories')
    .addTag('Subcategories')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors(corsOptions);

  await app.listen(3000);
}

bootstrap();
