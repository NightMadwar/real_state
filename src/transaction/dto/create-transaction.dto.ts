import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
  @ApiProperty()
  transactionID: string;

  @ApiProperty()
  propertyID: string;

  @ApiProperty()
  buyerID: string;

  @ApiProperty()
  sellerID: string;

  @ApiProperty()
  transactionType: string; // Buy, Rent

  @ApiProperty()
  price: number;

  @ApiProperty()
  paymentMethod: string; // Fixed, Installments

  @ApiProperty()
  transactionDate: Date;

  @ApiProperty()
  status: string; // Pending, Completed, Cancelled
}
