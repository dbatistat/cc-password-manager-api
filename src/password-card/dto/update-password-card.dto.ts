import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdatePasswordCardDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly url: string;
}
