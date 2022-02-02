import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  name:string;

  @ApiProperty()
  price:number;

  @ApiProperty()
  quantity:number;

  @ApiProperty()
  description:string;

  @ApiProperty()
  materiels:string;

  @ApiProperty()
  tags:string;

  @ApiProperty()
  img:string;

  @ApiProperty()
  reference:string;

  @ApiProperty()
  personnalisable:boolean;

  @ApiProperty()

  color:string;

  @ApiProperty()
  size:string;

  @ApiProperty()
  sId:number;

  @ApiProperty()
  subcategoryID:number;
}
