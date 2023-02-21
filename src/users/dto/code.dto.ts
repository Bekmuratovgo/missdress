import { ApiProperty } from "@nestjs/swagger";

export class CodeDto {
    @ApiProperty({example: "введите код отправленный на номер телефона"})
    readonly code: string;
}