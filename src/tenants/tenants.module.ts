import { Module } from '@nestjs/common';
import { TenantsService } from './services/tenants.service';
import { TenantsController } from './controllers/tenants.controller';


@Module({
  controllers: [TenantsController],
  providers: [TenantsService]
})
export class TenantsModule { }
