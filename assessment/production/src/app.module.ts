import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControlProductionModule } from './control_production/control_production.module';

@Module({
  imports: [ControlProductionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
