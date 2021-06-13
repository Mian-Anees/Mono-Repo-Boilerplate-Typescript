import { POSTS_REPOSITORY } from 'apps/backend/src/utils/constants';
import { PostsModel } from './model/posts.entities';


export const PostsProviders = [
  {
    provide: POSTS_REPOSITORY,
    useValue: PostsModel,
  },
];
