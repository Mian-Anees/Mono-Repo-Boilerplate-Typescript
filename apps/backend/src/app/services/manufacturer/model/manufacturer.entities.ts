// import { Field } from '@nestjs/graphql';
import { DataType,
    Model,Table, Index, PrimaryKey, Column, AutoIncrement } from 'sequelize-typescript';
  import { IManufacturersModel } from '../interfaces/manufacturer.interfaces';
   
  
  
    @Table({})
    export class ManufacturersModel extends Model<IManufacturersModel> {
      @AutoIncrement
      @PrimaryKey
      @Column(DataType.INTEGER)
      id: number;
    
      @Index({ unique: true })
      @Column
      name: string;
    
     
    }