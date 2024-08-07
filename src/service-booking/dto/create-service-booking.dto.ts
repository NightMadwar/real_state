import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceBookingDto {
  @ApiProperty()
  userID: string;

  @ApiProperty()
  serviceProviderID: string;

  @ApiProperty()
  serviceType: string; // Moving, Cleaning, Inspection

  @ApiProperty()
  serviceDate: Date;

  @ApiProperty()
  status: string; // Pending, Confirmed, Cancelled
}
