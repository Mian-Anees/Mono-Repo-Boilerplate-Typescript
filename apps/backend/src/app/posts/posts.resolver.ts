import {  Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PostsTypes } from '../services/posts/types/posts.types';
import { PostsService } from '../services/posts/posts.service';
import { PaginationArgsType, PostsArgsType } from '../services/posts/types/posts.args';

@Resolver(()=> String)
export class PostsResolver {
  constructor(private readonly postsService:PostsService){}
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(()=>PostsTypes )
  createPost(@Args()payload :PostsArgsType):Promise<PostsTypes>{
    console.log('in create resolver')
    return this.postsService.createPosts(payload)
  }

  @Query(()=>[PostsTypes] )
  FindAllPosts(@Args()payload :PaginationArgsType):Promise<PostsTypes[]>{
    console.log('in read resolver')
    return this.postsService.findAllPosts(payload);
  }
  


}