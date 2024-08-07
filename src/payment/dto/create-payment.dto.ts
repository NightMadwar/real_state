import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentDto {
  @ApiProperty()
  transactionID: string;

  @ApiProperty()
  paymentAmount: number;

  @ApiProperty()
  paymentDate: Date;

  @ApiProperty()
  paymentMethod: string; // Credit Card, Bank Transfer, PayPal

  @ApiProperty()
  createdAt: Date;
}
