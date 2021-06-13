// import { Field } from '@nestjs/graphql';
import { DataType,
    Model,Table,  PrimaryKey, Column, AutoIncrement } from 'sequelize-typescript';
import { IPostsModel } from '../interfaces/posts.interfaces';
   
  
  
    @Table({})
    export class PostsModel extends Model<IPostsModel> {
      @AutoIncrement
      @PrimaryKey
      @Column(DataType.INTEGER)
      id: number;

      @Column({ type: DataType.ARRAY(DataType.STRING) })
      images?: string[];
    
      @Column
      category_id?: number;

      @Column
      manufacturer_id?: number;
      
      @Column
      device_id?: number;
      
      @Column
      device_type?: string;
      
      @Column
      device_condition?: number;

      @Column
      price?: number;
     
    }

    