import { CategoriesModel } from './model/categories.entities';
import { CATEGORIES_REPOSITORY } from 'apps/backend/src/utils/constants';


export const CategoriesProviders = [
  {
    provide: CATEGORIES_REPOSITORY,
    useValue: CategoriesModel,
  },
];
