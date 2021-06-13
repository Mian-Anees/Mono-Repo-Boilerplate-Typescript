import { UserModel } from './models/user.model';
import { USERS_REPOSITORY } from './../../../utils/constants';


export const UsersProviders = [
  {
    provide: USERS_REPOSITORY,
    useValue: UserModel,
  },
];
