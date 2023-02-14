
export class CreateUserDto {
    // @ApiProperty({example: 'nur@gmail.com', description: 'Почтовый адрес'})
    readonly email: string;

    // @ApiProperty({example: '12345', description: 'Пароль'})
    readonly password: string;
}