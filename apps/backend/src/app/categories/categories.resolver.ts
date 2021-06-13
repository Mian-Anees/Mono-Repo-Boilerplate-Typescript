import { CategoriesService } from './../services/categories/categories.service';
import { CategoriesTypes } from './../services/categories/types/categories.types';
import {  Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CategoriesArgsType, PaginationArgsType } from '../services/categories/types/categories.args';

@Resolver(()=> String)
export class CategoriesResolver {
  constructor(private readonly Categorieservice:CategoriesService){}
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(()=>CategoriesTypes )
  createCategory(@Args()payload :CategoriesArgsType):Promise<CategoriesTypes>{
    console.log('in create resolver')
    return this.Categorieservice.createCategories(payload)
  }

  @Query(()=>[CategoriesTypes] )
  FindAllCategory(@Args()payload :PaginationArgsType):Promise<CategoriesTypes[]>{
    console.log('in read resolver')
    return this.Categorieservice.findAllCategories(payload);
  }
  


}