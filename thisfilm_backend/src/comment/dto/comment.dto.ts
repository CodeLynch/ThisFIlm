import { UserDTO } from "src/user/dto/user.dto";

export class CommentDTO{
    commentId:number;
    content:string;
    movieId:number;
    user:UserDTO;
}