import { ApiProperty } from "@nestjs/swagger";

export class CreateSubcategoryDto {
  @ApiProperty()
  name:string;

  @ApiProperty()
  img:string;

  @ApiProperty()
  cId:number;

  @ApiProperty()
  categoryID:number;

  readonly productIDs: number[]
}
