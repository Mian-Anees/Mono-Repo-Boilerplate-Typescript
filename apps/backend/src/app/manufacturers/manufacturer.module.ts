import { Module } from "@nestjs/common";
import { ManufacturersProviders } from "../services/manufacturer/manufacturer.provider";
import { ManufacturersService } from "../services/manufacturer/manufacturer.service";
import { ManufacturersResolver } from "./manufacturer.resolver";

@Module({
    // The imports and controllers live here
    providers: [
      ManufacturersService,
      ManufacturersResolver,...ManufacturersProviders
    ]
    // The exports live here
  })
  export class ManufacturersModule {}