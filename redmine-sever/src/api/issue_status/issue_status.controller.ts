import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IssueStatusService } from './issue_status.service';
import { CreateIssueStatusDto } from './dto/create-issue_status.dto';
import { UpdateIssueStatusDto } from './dto/update-issue_status.dto';

@Controller('issue-statuses')
export class IssueStatusController {
  constructor(private readonly issueStatusService: IssueStatusService) {}

  @Post()
  create(@Body() createIssueStatusDto: CreateIssueStatusDto) {
    return this.issueStatusService.create(createIssueStatusDto);
  }

  @Get()
  findAll() {
    return this.issueStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.issueStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIssueStatusDto: UpdateIssueStatusDto) {
    return this.issueStatusService.update(+id, updateIssueStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.issueStatusService.remove(+id);
  }
}
