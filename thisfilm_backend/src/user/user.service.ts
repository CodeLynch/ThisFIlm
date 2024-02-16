import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user';
import { Repository } from 'typeorm';
import { AbstractService } from 'src/common/abstract.service';

@Injectable()
export class UserService extends AbstractService{
    constructor(
        @InjectRepository(User) userrepo: Repository<User>
    ){
        super(userrepo);
    }
}
