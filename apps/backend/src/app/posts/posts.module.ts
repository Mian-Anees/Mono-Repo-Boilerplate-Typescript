import { Module } from "@nestjs/common";
import { PostsProviders } from "../services/posts/posts.provider";
import { PostsService } from "../services/posts/posts.service";
import { PostsResolver } from "./posts.resolver";

@Module({
    // The imports and controllers live here
    providers: [
      PostsService,
      PostsResolver,...PostsProviders
    ]
    // The exports live here
  })
  export class PostsModule {}