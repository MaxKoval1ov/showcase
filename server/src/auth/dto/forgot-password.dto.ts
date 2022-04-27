import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ForgotPasswordDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
