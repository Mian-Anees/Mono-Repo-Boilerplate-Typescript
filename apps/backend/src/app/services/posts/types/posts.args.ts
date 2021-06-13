import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class PostsArgsType{
    @Field(type => Number,{nullable:true})
    id?: number;

    @Field(type => [String],{nullable:true})
    images?:string[];

    @Field(type => Number,{nullable:true})
    category_id?:number;

    @Field(type => Number,{nullable:true})
    manufacturer_id?:number;

    @Field(type => Number,{nullable:true})
    device_id?:number;

    @Field(type => String,{nullable:true})
    device_type?:string;

    @Field(type => Number,{nullable:true})
    device_condition?:number;

    @Field(type => Number,{nullable:true})
    price?:number;

}


@ArgsType()
export class PaginationArgsType{
    @Field(type => Number,{nullable:true})
    limit?: number;

    
    @Field(type => Number,{nullable:true})
    skip?:number;
}