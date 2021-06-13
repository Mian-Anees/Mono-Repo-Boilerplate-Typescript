import { Field, ObjectType } from '@nestjs/graphql';

// export type CategoriesType=ICategoriesModel

@ObjectType()
export class CategoriesTypes{
    @Field(type => Number,{nullable:true})
    id?: number;

    @Field(type => String,{nullable:true})
    name?: string;

    @Field(type => String,{nullable:true})
    image?:string;
}