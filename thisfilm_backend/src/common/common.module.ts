import { Module } from '@nestjs/common';
import { AbstractService } from './abstract.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports:[
        ConfigModule.forRoot(),
        JwtModule.register({
            secret: process.env.SECRET,
            signOptions: {expiresIn: '1d'},
          })
    ],
    exports:[
        ConfigModule, JwtModule
    ]
})
export class CommonModule {}
