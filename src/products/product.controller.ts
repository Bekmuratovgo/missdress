import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ProductsService } from "./product.service";


@Controller('product')
export class ProductsController {
    constructor(private productService: ProductsService) {}

    @Post()
    async create (@Body() productDto: any) {
        return this.productService.createProduct(productDto);
    }

    @Get()
    async getAll () {
        return this.productService.getAllProducts()
    }

    @Put(':id')
    async update (@Param('id') id: number, @Body() updateProductDto: any) {
        return this.productService.updateProduct(id, updateProductDto);
    }

    @Put('rating/:id')
    async updateRating (@Param('id') id: number, @Body() updateRating: number) {
        if (!updateRating) {
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        }
        return this.productService.updateProduct(id, null, updateRating);
    }

    @Get('new')
    async getNewProducts () {
        return this.productService.getAllNewProducts()
    }
}