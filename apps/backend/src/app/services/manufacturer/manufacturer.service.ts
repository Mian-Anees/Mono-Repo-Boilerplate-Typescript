import {  MANUFACTURER_REPOSITORY } from 'apps/backend/src/utils/constants';
import { Inject, Injectable } from "@nestjs/common";
import { ManufacturersModel } from './model/manufacturer.entities';
import { PaginationArgsType } from './types/manufacturer.args';
import { ManufacturersTypes } from './types/manufacturer.types';

@Injectable()
export class ManufacturersService {
  constructor(
    @Inject(MANUFACTURER_REPOSITORY)
    private readonly manufacturersRepository: typeof ManufacturersModel,
    // private readonly gtClassService: GtClassService
  ) {}

  async createManufacturers(payload:ManufacturersTypes):Promise<ManufacturersTypes>{

   return this.manufacturersRepository.create(payload)
  }

  async findAllManufacturers(payload:PaginationArgsType):Promise<ManufacturersTypes[]>{
    // console.log(await this.CategoriesRepository.findAll())
    return this.manufacturersRepository.findAll()
   }

}
 