import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Miss Dress')
  .setDescription('The MissDress online shop')
  .setVersion('1.0')
  .addTag('MissDress')
  .build();
const document = SwaggerModule.createDocument(app, config);

// app.setGlobalPrefix('api');


SwaggerModule.setup('api', app, document);
  await app.listen(PORT, () => console.log('Server started on PORT ' + PORT));
}
bootstrap();
