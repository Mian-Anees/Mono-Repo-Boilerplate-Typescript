import { ManufacturersModel } from './model/manufacturer.entities';
import {  MANUFACTURER_REPOSITORY } from 'apps/backend/src/utils/constants';


export const ManufacturersProviders = [
  {
    provide: MANUFACTURER_REPOSITORY,
    useValue: ManufacturersModel,
  },
];
