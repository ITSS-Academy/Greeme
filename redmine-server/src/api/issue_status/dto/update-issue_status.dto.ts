import { PartialType } from '@nestjs/mapped-types';
import { CreateIssueStatusDto } from './create-issue_status.dto';

export class UpdateIssueStatusDto extends PartialType(CreateIssueStatusDto) {}
