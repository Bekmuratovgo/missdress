import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'John', description: 'Имя'})
    readonly firstName: string;
    @ApiProperty({example: 'Doe', description: 'Фамилия'})
    readonly lastName: string;
    @ApiProperty({example: '0550223324', description: 'номер телефона'})
    readonly phoneNumber: string;
    @ApiProperty({example: "введите код отправленный на номер телефона"})
    readonly code: string;
}