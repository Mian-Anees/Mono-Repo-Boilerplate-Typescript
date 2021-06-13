// import { Field } from '@nestjs/graphql';
import { DataType,
    Model,Table, Index, PrimaryKey, Column, AutoIncrement } from 'sequelize-typescript';
import { IDevicesModel } from '../interfaces/devices.interfaces';
   
  
  
    @Table({})
    export class DevicesModel extends Model<IDevicesModel> {
      @AutoIncrement
      @PrimaryKey
      @Column(DataType.INTEGER)
      id: number;
    
      @Index({ unique: true })
      @Column
      name: string;
    
     
    }