import { ApiProperty } from "@nestjs/swagger";

export class CreateAdminDto {
    @ApiProperty()
  propertyID: string;
}
