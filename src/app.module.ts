import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { UsersModule } from './users/users.module';
import { PermissionsModule } from './permissions/permissions.module';
import { TenantsModule } from './tenants/tenants.module';
import { RedisModule } from './cache/redis/redis.module';
import { DatabaseModule } from './database/database.module';
import { PermissonsController } from './permissons/permissons.controller';

@Module({
  imports: [AuthModule, CommonModule, UsersModule, PermissionsModule, TenantsModule, RedisModule, DatabaseModule],
  controllers: [AppController, PermissonsController],
  providers: [AppService],
})
export class AppModule { }
