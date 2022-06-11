import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import { useContainer } from 'class-validator';

import * as express from 'express';
import * as cors from 'cors';

async function bootstrap() {
  // create express instance
  const server = express();

  // create nest instance
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(server),
  );

  // Allow NestJS dependency injection for custom validator constraint classes
  useContainer(app.select(AppModule), {fallbackOnErrors: true});

  app.use(
    cors({
      origin: '*',
    }),
  );

  // register validation pipe for all route handlers
  app.useGlobalPipes(new ValidationPipe({validationError: {target: false}}));

  const port = Number(process.env.PORT) || 3000;

  // launch the server
  await app.listen(port);
}

bootstrap();
