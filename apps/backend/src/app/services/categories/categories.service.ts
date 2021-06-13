import { PaginationArgsType } from './types/categories.args';
import { CategoriesModel } from './model/categories.entities';
import { CATEGORIES_REPOSITORY } from 'apps/backend/src/utils/constants';
import { Inject, Injectable } from "@nestjs/common";
import { CategoriesTypes } from './types/categories.types';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(CATEGORIES_REPOSITORY)
    private readonly CategoriesRepository: typeof CategoriesModel,
    // private readonly gtClassService: GtClassService
  ) {}

  async createCategories(payload:CategoriesTypes):Promise<CategoriesTypes>{

   return this.CategoriesRepository.create(payload)
  }

  async findAllCategories(payload:PaginationArgsType):Promise<CategoriesTypes[]>{
    // console.log(await this.CategoriesRepository.findAll())
    return this.CategoriesRepository.findAll()
   }

}
 