import { User } from "src/user/user";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_comment')
export class Comment{

    @PrimaryGeneratedColumn()
    commentId:number;

    @Column()
    content:string;

    @Column()
    movieId:number;

    @ManyToOne(()=>User, User => User.comments)
    user:User;
}