import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { JwtService } from '@nestjs/jwt';
import { CommentDTO } from './dto/comment.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express';
import { UserService } from 'src/user/user.service';
import { Comment } from './comment';

@Controller('comment')
export class CommentController {
    constructor(
        private commentServ: CommentService,
        private jwtServ: JwtService,
        private userServ: UserService,
    ){}
    
    @UseGuards(AuthGuard)
    @Post()
    async postComment(
        @Req() req: Request,
        @Body() body: CommentDTO
    ){
        const cookie = req.cookies['jwt'];
        const { sub } = await this.jwtServ.verifyAsync(cookie);
        const user = await this.userServ.findOne({userId:sub});

        this.commentServ.save({...body, user });
        return{
            comment:true, 
            message:"Comment Successfully posted!"
        }
    }

    @Get('user/:id')
    async getCommentsByUser(
        @Param('id') id: number,
        @Req() req:Request
    ){
        const user = await this.userServ.findOne({userId:id});
        const comments: Comment[] = await this.commentServ.find({user})

        const page:number = parseInt(req.query.page as string) || 1;
        const perPage = 3;
        const total = comments.length;
        
        const data = comments.slice((page - 1) * perPage, page * perPage);
        return {
            email: user.email,
            displayName: user.displayName,
            data,
            total,
            page,
            last_page: Math.ceil(total / perPage)
        };
    }
}
