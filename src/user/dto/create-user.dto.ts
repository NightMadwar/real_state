import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  userType: string; // Buyer, Seller, Agent

  @ApiProperty()  
  profilePicture: string;
}
