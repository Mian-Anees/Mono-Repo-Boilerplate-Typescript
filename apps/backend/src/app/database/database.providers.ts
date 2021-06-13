import { Dialect } from 'sequelize/types';
// import {  SellerModel } from './../services/seller/model/seller.entities';
import  {Sequelize}  from 'sequelize-typescript';
import { CategoriesModel } from '../services/categories/model/categories.entities';
import { UserModel } from '../services/user/models/user.model';
import { PostsModel } from '../services/posts/model/posts.entities';
import { ManufacturersModel } from '../services/manufacturer/model/manufacturer.entities';
import { DevicesModel } from '../services/devices/model/devices.entities';

export const databaseProviders = 
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(
        'postgres' as string,
        'postgres' as string,
        'headshot' as string,
        {
          dialect: 'postgres'as Dialect,
          host: 'database-1.ctrw9mpachwj.us-east-2.rds.amazonaws.com' as string,
          port:5432,
        }
      );
      sequelize.addModels([
        // SellerModel,
        DevicesModel,
        ManufacturersModel,
        CategoriesModel,
        UserModel,
        PostsModel
      ]);

      await sequelize.sync();
      // const directory = `${__dirname}/migrations`;
      // if (fs.existsSync(directory)) {
      //   const umzug = new Umzug({
      //     logger: console,

      //     migrations: {
      //       path: `${__dirname}/migrations`,
      //       params: [
      //         sequelize.getQueryInterface(),
      //         configService.get('DB_NAME'),
      //         sequelize,
      //       ],
      //     },
      //     storage: 'sequelize',
      //     storageOptions: {
      //       sequelize,
      //     },
      //   });

      //   void (async (): Promise<void> => {
      //     await umzug.up();
      //   })();
      // }

      return sequelize;
    }
  }
