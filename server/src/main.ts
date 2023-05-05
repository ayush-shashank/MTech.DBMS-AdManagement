import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      enableDebugMessages: true,
      validationError: {
        target: true,
        value: true,
      },
      stopAtFirstError: true,
    }),
  );
  swaggerSetup(app);
  await app.listen(3000);
}
bootstrap();

function swaggerSetup(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Ad Management')
    .setDescription('The Ad Management API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
