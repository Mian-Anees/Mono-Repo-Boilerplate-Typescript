import { UsersTypes } from './types/user.types';
import { UserModel } from './models/user.model';
import { USERS_REPOSITORY } from './../../../utils/constants';
import { Inject, Injectable } from "@nestjs/common";
import { PaginationArgsType } from '../categories/types/categories.args';


@Injectable()
export class UserService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: typeof UserModel,
    // private readonly gtClassService: GtClassService
  ) {}

  async createUsers(payload:UsersTypes):Promise<UsersTypes>{

   return this.usersRepository.create(payload)
  }

  async findAllUsers(payload:PaginationArgsType):Promise<UsersTypes[]>{
    // console.log(await this.CategoriesRepository.findAll())
    return this.usersRepository.findAll()
   }

}
 