import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/products/product.model";
import { BasketController } from "./basket.controller";
import { Basket } from "./basket.model";
import { BasketService } from "./basket.service";


@Module({
    controllers: [BasketController],
    providers: [BasketService],
    imports: [
        TypeOrmModule.forFeature([Basket, Product])
    ]
})
export class BasketModule {}