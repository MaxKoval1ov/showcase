import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: { origin: '*' } });

  const config = new DocumentBuilder()
    .setTitle('Swag')
    .setDescription('Test')
    .setVersion('1.0')
    .addTag('Tags')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT, () => console.log(`App listen on port ${PORT}`));
}
bootstrap();
