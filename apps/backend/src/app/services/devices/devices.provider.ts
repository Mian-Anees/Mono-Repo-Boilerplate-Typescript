import { DevicesModel } from './model/devices.entities';
import { DEVICES_REPOSITORY } from "apps/backend/src/utils/constants";


export const DevicesProviders = [
  {
    provide: DEVICES_REPOSITORY,
    useValue: DevicesModel,
  },
];
