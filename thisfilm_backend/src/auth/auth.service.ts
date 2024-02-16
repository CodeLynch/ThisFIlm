import { Injectable } from '@nestjs/common';
import { LoginDTO } from './dto/auth.dto';

@Injectable()
export class AuthService {
    validateUser({email, password}:LoginDTO){

    }
}
