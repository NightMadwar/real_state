import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty()
  senderID: string;

  @ApiProperty()
  receiverID: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  sentAt: Date;

  @ApiProperty()
  readAt: Date;
}
