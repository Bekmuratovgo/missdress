import { Injectable, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/products/product.model";
import { Repository } from "typeorm";
import { Basket } from "./basket.model";


@Injectable()
export class BasketService {
    constructor(
        @InjectRepository(Basket) 
        private basketRepository: Repository<Basket>,
        
        @InjectRepository(Product) 
        private productRepository: Repository<Product>,
    ) {}

    async getBasket() {
        return this.basketRepository.find({ where: {user_:{id: 1} },relations: ['products_'] })
    }

    async addProductToBasket(id: number, amount: number, userId: number = 1) {
        const product: any = await this.productRepository.findOneBy({id});
        const basketOwner = await this.basketRepository.findOne({ where: {user_:{id: userId}, products_: {id:product.id} } })

        if (basketOwner) {
            await this.basketRepository.save({total_price: product.price * amount, amount, user_ : {id: userId}, product_: {id: product.id}});
        }
        await this.basketRepository.save({total_price: product.price * amount, amount: amount, user_ : {id: userId}, product_: {id: product.id}});

        return this.basketRepository.find()
    }

    async deleteFromBasket(id: number) {
        await this.basketRepository.delete(id);
    }
}