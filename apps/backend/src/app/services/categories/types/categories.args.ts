import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class CategoriesArgsType{
    @Field(type => Number,{nullable:true})
    id?: number;

    @Field(type => String)
    name?: string;

    @Field(type => String)
    image?:string;
}

@ArgsType()
export class PaginationArgsType{
    @Field(type => Number,{nullable:true})
    limit?: number;

    
    @Field(type => Number,{nullable:true})
    skip?:number;
}