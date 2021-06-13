import { Field,  ObjectType } from '@nestjs/graphql';

// export type CategoriesType=ICategoriesModel

@ObjectType()
export class PostsTypes{

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