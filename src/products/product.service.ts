import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) private productRepository: Repository<Product>,
    ) { }

    async createProduct(dto: any) {
        let products: any = this.productRepository.create(dto);
        let created = await this.productRepository.save(products);

        return {
            status: 201,
            message: ' Product success created!',
            product: created
        };
    }

    async updateProduct(id: number, updateProductDto: any, rating?: number) {
        const entity: any = await this.productRepository.findOneBy({ id })

        if (!entity) {
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        }
        if (rating) {
            await this.productRepository.update( 
                { id },
                { ...entity, rating }
            )
        } else {
            await this.productRepository.update(
                { id },
                { ...updateProductDto }
            )
        }

        return this.productRepository.findOne({
            where: { id }
        });
    }

    async getAllProducts() {
        const products = await this.productRepository.find();
        let sortedProducts = products.sort((a: any, b: any) => a.id - b.id);
        
        return sortedProducts;
    }
    
    async getAllNewProducts () {
        const products = await this.productRepository.find();
        let sortedProducts = products.sort((a: any, b: any) => a.id - b.id);
        console.log(sortedProducts, 'PRODUCTS');
        
    }
}
