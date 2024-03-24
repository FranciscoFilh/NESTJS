import { Module } from '@nestjs/common';
import { UserController } from './user.controle';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersService } from './user.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UsersService],
  exports: [],
})
export class UserModule {}