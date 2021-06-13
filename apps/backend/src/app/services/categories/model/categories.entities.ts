// import { Field } from '@nestjs/graphql';
import { DataType,
  Model,Table, Index, PrimaryKey, Column, AutoIncrement } from 'sequelize-typescript';
import { ICategoriesModel } from '../interfaces/categories.interface';
 


  @Table({})
  export class CategoriesModel extends Model<ICategoriesModel> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number;
  
    @Index({ unique: true })
    @Column
    name: string;
  
    @Column
    image?: string;
  
  
   
  }