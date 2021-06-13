import {  Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ManufacturersTypes } from '../services/manufacturer/types/manufacturer.types';
import { ManufacturersArgsType, PaginationArgsType } from '../services/manufacturer/types/manufacturer.args';
import { ManufacturersService } from "../services/manufacturer/manufacturer.service";

@Resolver(()=> String)
export class ManufacturersResolver {
  constructor(private readonly manufacturersService:ManufacturersService){}
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(()=>ManufacturersTypes )
  createManufacturer(@Args()payload :ManufacturersArgsType):Promise<ManufacturersTypes>{
    console.log('in create resolver')
    return this.manufacturersService.createManufacturers(payload)
  }

  @Query(()=>[ManufacturersTypes] )
  FindAllManufacturer(@Args()payload :PaginationArgsType):Promise<ManufacturersTypes[]>{
    console.log('in read resolver')
    return this.manufacturersService.findAllManufacturers(payload);
  }
  


}