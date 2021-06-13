import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import * as _ from 'lodash';
// import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
import { DatabaseModule } from './database/database.module';
import { CategoriesModule } from './categories/categories.module';
import { DevicesModule } from './devices/devices.module';
import { ManufacturersModule } from './manufacturers/manufacturer.module';
import { PostsModule } from './posts/posts.module';
import { UserModule } from './user/user.module';
// import { SellerModule } from './seller/seller-profile.module';
@Module({
  imports: [
    // SellerModule,
    DevicesModule,
    CategoriesModule,
    ManufacturersModule,
    DatabaseModule,
    UserModule,
    PostsModule,
    GraphQLModule.forRoot({ 
      // typePaths: ['apps/backend/src/app/**/*.graphql'],
      autoSchemaFile: 'apps/backend/src/app/schema.gql',
      playground: true,
      // autoSchemaFile: true
      sortSchema: true,
    }),

    // GraphQLModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     include: [],
    //     typePaths: [
    //       path.join(process.cwd(),'apps/backend/src/app/**/*.graphql' as string),
    //     ],
    //     installSubscriptionHandlers: true,
    //     context: ({ raw }) => ({ raw }),
    //     introspection: true,
    //     // debug: configService.get('NODE_ENV') === 'development',
    //     resolverValidationOptions: {
    //       requireResolversForResolveType: false,
    //     },
    //     // uploads: {
    //     //   maxFileSize: 2000000, // 2 MB
    //     // },
    //     uploads: false,
    //     resolvers: {
    //       JSON: GraphQLJSON,
    //       JSONObject: GraphQLJSONObject,
    //     },
    //     formatError: error => {
    //       try {
    //         error.message = JSON.parse(error.message);
    //       } catch {
    //         // Empty
    //       }
    //       return {
    //         ...error,
    //         message: error.message,
    //         code: _.get(error, 'extensions.exception.title', 'UNKNOWN'),
    //         locations: error.locations,
    //         path: error.path,
    //       };
    //     },
    //     formatResponse: response => response,
    //   }),
    //   inject: [ConfigService],
    // }),
  ],
  providers: [
  ],
  controllers: [],
  
})
export class AppModule {}
