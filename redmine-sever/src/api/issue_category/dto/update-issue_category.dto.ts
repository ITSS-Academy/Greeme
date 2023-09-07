import { PartialType } from '@nestjs/mapped-types';
import { CreateIssueCategoryDto } from './create-issue_category.dto';

export class UpdateIssueCategoryDto extends PartialType(CreateIssueCategoryDto) {}
