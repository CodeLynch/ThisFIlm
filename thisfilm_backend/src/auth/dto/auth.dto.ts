import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginDTO{
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    password:string;
}

export class RegisterDTO{

    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    displayName: string;
    
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    confirmPassword: string;
}