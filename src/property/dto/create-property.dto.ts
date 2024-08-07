import { ApiProperty } from '@nestjs/swagger';

export class CreatePropertyDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  area: number;

  @ApiProperty()
  height: number;

  @ApiProperty()
  numberOfRooms: number;

  @ApiProperty()
  numberOfBathrooms: number;

  @ApiProperty()
  materials: string;

  @ApiProperty()
  userID: string;

  @ApiProperty()
  status: string; // Available, Sold, Rented
}
