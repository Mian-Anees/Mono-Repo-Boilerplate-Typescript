import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UsersTypes{
    @Field(type => Number,{nullable:true})
    id?: number;

    @Field(type => String,{nullable:true})
    user_name?: string;

    @Field(type => String,{nullable:true})
    image?:string;

    @Field(type => String,{nullable:true})
    role?:string;

    @Field(type => String,{nullable:true})
    password?:string;
    
    @Field(type => String,{nullable:true})
    token?:string;
}