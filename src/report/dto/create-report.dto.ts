import { ApiProperty } from '@nestjs/swagger';

export class CreateReportDto {
  @ApiProperty()
  userID: string;

  @ApiProperty()
  reportType: string; // User, Property, Transaction

  @ApiProperty()
  description: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  resolvedAt: Date;
}
