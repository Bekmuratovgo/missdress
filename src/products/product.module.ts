import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsController } from "./product.controller";
import { Product } from "./product.model";
import { ProductsService } from "./product.service";

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    TypeOrmModule.forFeature([Product])
  ],

})
export class ProductsModule {}
