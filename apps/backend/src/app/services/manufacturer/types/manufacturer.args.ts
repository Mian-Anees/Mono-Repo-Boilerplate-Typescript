import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class ManufacturersArgsType{
    @Field(type => Number,{nullable:true})
    id?: number;

    @Field(type => String)
    name?: string;

}

@ArgsType()
export class PaginationArgsType{
    @Field(type => Number,{nullable:true})
    limit?: number;

    
    @Field(type => Number,{nullable:true})
    skip?:number;
}