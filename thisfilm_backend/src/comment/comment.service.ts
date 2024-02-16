import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Comment } from './comment';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService extends AbstractService{
    constructor(
        @InjectRepository(Comment) private readonly commrepo: Repository<Comment>
        ){
            super(commrepo);
        }
}
