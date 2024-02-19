import { BadRequestException, Body, ClassSerializerInterceptor, Controller, Get, NotFoundException, Post, Req, Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { LoginDTO, RegisterDTO } from './dto/auth.dto';
import * as bcrypt from 'bcryptjs';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { request } from 'http';
import { AuthGuard } from './auth.guard';


@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {

    constructor(
        private userServ:UserService,
        private jwtServ:JwtService,
        ){}

    @Post('register')
    async register(@Body() body: RegisterDTO){
        const {confirmPassword, ...credentials} = body;

        if(body.password !== confirmPassword){
        throw new BadRequestException("Passwords do not match!")
       }

        const hashed = await bcrypt.hash(body.password, 12);
        
        return this.userServ.save({
            ...credentials,
            password: hashed,
        });
    }

    @Post('login')
    async login(
        @Body() credetials: LoginDTO,
        @Res({passthrough:true}) response:Response,
    ){
        const {email, password} = credetials;

        const user = await this.userServ.findOne({email});
        
        if(!user || !await bcrypt.compare(password, user.password)){
            throw new BadRequestException("Invalid Credentials");
        }

        const jwt = await this.jwtServ.signAsync({
            sub: user.userId,
        })

        response.cookie('jwt', jwt,{
            httpOnly:true,
        })
        return {
            login:true,
            message:"Login Successfully!"
        };
    }

    @UseGuards(AuthGuard)
    @Get('user')
    async getUser(@Req() request: Request){
        const cookie = request.cookies['jwt'];
        
        const {sub} = await this.jwtServ.verifyAsync(cookie);

        console.log("this is the id: ",sub);

        const user = await this.userServ.findOne({userId:sub});
        
        
        return user;
    }

    @UseGuards(AuthGuard)
    @Post('logout')
    logout(
        @Res({passthrough:true}) res: Response
        ){
            res.clearCookie('jwt');

            return{
                login:false,
                message:"Logout successfully!"
            }
    }
}
