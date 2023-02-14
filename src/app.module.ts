import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DB_CONFIG } from './config/db.config';

@Module({
  imports: [TypeOrmModule.forRoot(DB_CONFIG)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
