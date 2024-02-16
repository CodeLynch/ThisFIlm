import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private jwtServ:JwtService,
    ){}

    canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest();
        try{
            const jwt = req.cookies['jwt'];
            return this.jwtServ.verify(jwt);
        }catch(err){
            return false;
        }
    }

}