import { ApiProperty } from "@nestjs/swagger";
import {IsString, IsArray, IsOptional, IsNumber } from "class-validator";


export class BookDTO {
  @ApiProperty()
  @IsString()
  title: string

  @ApiProperty()
  @IsNumber()
  year: number

  @ApiProperty()
  @IsString()
  generes: string

  @ApiProperty()
  @IsArray()
  authors: string[]
}