import {  POSTS_REPOSITORY } from 'apps/backend/src/utils/constants';
import { Inject, Injectable } from "@nestjs/common";
import { PostsModel } from './model/posts.entities';
import { PostsTypes } from './types/posts.types';
import { PaginationArgsType, PostsArgsType } from './types/posts.args';

@Injectable()
export class PostsService {
  constructor(
    @Inject(POSTS_REPOSITORY)
    private readonly postsRepository: typeof PostsModel,
    // private readonly gtClassService: GtClassService
  ) {}

  async createPosts(payload:PostsArgsType):Promise<PostsTypes>{

   return this.postsRepository.create(payload)
  }

  async findAllPosts(payload:PaginationArgsType):Promise<PostsTypes[]>{
    // console.log(await this.CategoriesRepository.findAll())
    return this.postsRepository.findAll()
   }

}
 