import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SignInDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
