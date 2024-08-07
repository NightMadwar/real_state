import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateServiceProviderDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly contactInfo: string;

  @IsString()
  @IsNotEmpty()
  readonly serviceType: string;

  @IsNumber()
  @IsOptional()
  readonly rating?: number;
}
