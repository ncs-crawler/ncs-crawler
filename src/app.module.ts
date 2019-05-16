import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NCSService } from './schedule/ncs.service';
import { ScheduleModule } from '@nestcloud/schedule';

@Module({
  imports: [ScheduleModule.register()],
  controllers: [AppController],
  providers: [AppService, NCSService],
})
export class AppModule {}
