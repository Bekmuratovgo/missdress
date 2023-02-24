
export class CreateProductDto {
    // @ApiProperty({example: 'nur@gmail.com', description: 'Почтовый адрес'})
    // @ApiProperty({example: '12345', description: 'Пароль'})
    readonly title: string;
    readonly description: string;
    readonly price: number;
    readonly oldPrice: number;
    readonly size: string;
    readonly likes: number;
    // readonly img: any;
    // readonly img: any;
}