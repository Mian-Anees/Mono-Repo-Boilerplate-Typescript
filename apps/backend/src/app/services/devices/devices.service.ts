import { Inject, Injectable } from "@nestjs/common";
import { DevicesModel } from "./model/devices.entities";
import { PaginationArgsType } from "./types/devices.args";
import { DevicesTypes } from "./types/devices.types";

@Injectable()
export class DevicesService {
  constructor(
    @Inject(DEVICES_REPOSITORY)
    private readonly devicesRepository: typeof DevicesModel,
    // private readonly gtClassService: GtClassService
  ) {}

  async createDevices(payload:DevicesTypes):Promise<DevicesTypes>{

   return this.devicesRepository.create(payload)
  }

  async findAllDevices(payload:PaginationArgsType):Promise<DevicesTypes[]>{
    // console.log(await this.CategoriesRepository.findAll())
    return this.devicesRepository.findAll()
   }

}

function DEVICES_REPOSITORY(DEVICES_REPOSITORY: any) {
  throw new Error("Function not implemented.");
}
 