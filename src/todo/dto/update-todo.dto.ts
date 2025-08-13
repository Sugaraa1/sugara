import { IsOptional, IsBoolean , IsNotEmpty} from 'class-validator';

export class UpdateTodoDto {
  @IsOptional()
  @IsNotEmpty()
  title?: string;


  @IsOptional()
  description?: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}