import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { EmployeeModule } from './employee/employee.module';
import { AdvertiserModule } from './advertiser/advertiser.module';
import { AddressModule } from './address/address.module';
import { AdvertismentModule } from './advertisment/advertisment.module';
import { BudgetModule } from './budget/budget.module';
import { CompanyModule } from './company/company.module';
import { PlatformModule } from './platform/platform.module';
import { ProductModule } from './product/product.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'AdManagement',
      entities: [],
      synchronize: false,
      entityPrefix: 'tbl_',
      autoLoadEntities: true,
    }),
    UsersModule,
    EmployeeModule,
    AdvertiserModule,
    AddressModule,
    AdvertismentModule,
    BudgetModule,
    CompanyModule,
    PlatformModule,
    ProductModule,
    ReportModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
