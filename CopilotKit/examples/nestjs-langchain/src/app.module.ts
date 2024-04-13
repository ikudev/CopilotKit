import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { CopilotkitService } from './copilotkit.service';
import { ApiController } from './api.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ApiController],
  providers: [CopilotkitService],
})
export class AppModule {}
