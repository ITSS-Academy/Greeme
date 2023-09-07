import { PartialType } from '@nestjs/mapped-types';
import { CreateIssuePriorityDto } from './create-issue_priority.dto';

export class UpdateIssuePriorityDto extends PartialType(CreateIssuePriorityDto) {}
