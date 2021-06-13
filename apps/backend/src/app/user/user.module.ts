import { UserResolver } from './user.resolver';
import { Module } from "@nestjs/common";
import { UserService } from '../services/user/user.service';
import { UsersProviders } from '../services/user/user.provider';

@Module({
    
    providers: [UserService,UserResolver,...UsersProviders ],
    exports:[UserService]
  })
  export class UserModule {}