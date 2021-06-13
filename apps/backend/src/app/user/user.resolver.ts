import { UsersTypes } from './../services/user/types/user.types';
import { UserService } from './../services/user/user.service';
import {  Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import {  PaginationArgsType } from '../services/categories/types/categories.args';
import { UsersArgsType } from '../services/user/types/user.args';

@Resolver(()=> String)
export class UserResolver {
  constructor(private readonly userService:UserService){}
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(()=>UsersTypes )
  createUser(@Args()payload :UsersArgsType):Promise<UsersTypes>{
    console.log('in create resolver')
    return this.userService.createUsers(payload)
  }

  @Query(()=>[UsersTypes] )
  FindAllUsers(@Args()payload :PaginationArgsType):Promise<UsersTypes[]>{
    console.log('in read resolver')
    return this.userService.findAllUsers(payload);
  }
  


}