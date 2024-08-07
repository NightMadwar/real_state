import { ApiProperty } from '@nestjs/swagger';

export class CreatePropertyMediaDto {
  @ApiProperty()
  mediaType: string; // Image, Video, VirtualTour

  @ApiProperty()
  url: string;

  @ApiProperty()
  propertyID: string;

  @ApiProperty()
  createdAt: Date;
}
