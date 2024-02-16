import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([User]),
    CommonModule,
  ],
  providers: [UserService],
  controllers: [UserController],
  exports:[UserService],
})
export class UserModule {}
