import { Field, Int, ObjectType } from '@nestjs/graphql';

// export type CategoriesType=ICategoriesModel

@ObjectType()
export class ManufacturersTypes{
    @Field(type => Number,{nullable:true})
    id?: number;

    @Field(type => String,{nullable:true})
    name?: string;

    
}