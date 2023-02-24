import { Body, Controller, Delete, Get, Param, Patch, Put, Req } from "@nestjs/common";
import { BasketService } from "./basket.service";


@Controller('basket')
export class BasketController {
    constructor (private basketService: BasketService) {}

    @Get()
    async getAll () {
        return this.basketService.getBasket();
    }

    @Patch(':id')
    async addProductToBasket (@Param('id') id: number, @Body('amount') amount: number ) {
        return this.basketService.addProductToBasket(id, amount);
    }

    @Delete(':id')
    async removeProductFromBasket(@Param('id') id: number) {
        await this.basketService.deleteFromBasket(id)
    }
}