import { Module } from "@nestjs/common";
import { CategoriesProviders } from "../services/categories/categories.provider";
import { CategoriesService } from "../services/categories/categories.service";
import { CategoriesResolver } from "./categories.resolver";
// import { CategoriesResolver } from "./Categories.resolver";

@Module({
    // The imports and controllers live here
    providers: [
      CategoriesService,
      CategoriesResolver,...CategoriesProviders
    ]
    // The exports live here
  })
  export class CategoriesModule {}