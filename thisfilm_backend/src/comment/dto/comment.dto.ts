import { IsNotEmpty } from "class-validator";
import { UserDTO } from "src/user/dto/user.dto";

export class CommentDTO{

    @IsNotEmpty()
    content:string;

    @IsNotEmpty()
    movieId:number;

    @IsNotEmpty()
    isRecommended:boolean;

}