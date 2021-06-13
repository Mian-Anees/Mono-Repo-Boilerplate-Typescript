import {  Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { DevicesService } from "../services/devices/devices.service";
import { DevicesArgsType, PaginationArgsType } from "../services/devices/types/devices.args";
import { DevicesTypes } from "../services/devices/types/devices.types";

@Resolver(()=> String)
export class DevicesResolver {
  constructor(private readonly devicesService:DevicesService){}
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(()=>DevicesTypes )
  createDevices(@Args()payload :DevicesArgsType):Promise<DevicesTypes>{
    console.log('in create resolver')
    return this.devicesService.createDevices(payload)
  }

  @Query(()=>[DevicesTypes] )
  FindAllDevices(@Args()payload :PaginationArgsType):Promise<DevicesTypes[]>{
    console.log('in read resolver')
    return this.devicesService.findAllDevices(payload);
  }
  


}