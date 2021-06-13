import { IUserModel } from './../interfaces/user.interface';
import { DataType,
    Model,Table, Index, PrimaryKey, Column, AutoIncrement } from 'sequelize-typescript';

  
  
    @Table({})
    export class UserModel extends Model<IUserModel> {
      @AutoIncrement
      @PrimaryKey
      @Column(DataType.INTEGER)
      id: number;
    
      @Column
      user_name: string;
    
      @Column
      image?: string;

      @Index({ unique: true })
      @Column
      email?: string;

      @Column
      password?: string;

      @Column
      role?: string;
    
      @Column
      token?: string;
    
     
    }