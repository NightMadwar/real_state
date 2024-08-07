import { ApiProperty } from '@nestjs/swagger';

export class CreateAppointmentDto {
  @ApiProperty()
  propertyID: string;

  @ApiProperty()
  userID: string;

  @ApiProperty()
  appointmentDate: Date;

  @ApiProperty()
  status: string; // Pending, Confirmed, Cancelled
}
