import { Module } from "@nestjs/common";
import { DevicesProviders } from "../services/devices/devices.provider";
import { DevicesService } from "../services/devices/devices.service";
import { DevicesResolver } from "./devices.resolver";

@Module({
    // The imports and controllers live here
    providers: [
      DevicesService,
      DevicesResolver ,...DevicesProviders
    ]
    // The exports live here
  })
  export class DevicesModule {}