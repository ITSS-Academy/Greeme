import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { IssueService } from './issue.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';

@Controller('issues')
export class IssueController {
  constructor(private readonly issueService: IssueService) {}

  @Post()
  create(@Body() createIssueDto: CreateIssueDto) {
    return this.issueService.create(createIssueDto);
  }

  @Get()
  findAll(@Query("projectId") idProject: any) {
    return this.issueService.findAll(idProject);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.issueService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateIssueDto: UpdateIssueDto) {
    return this.issueService.update(+id, updateIssueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.issueService.remove(id);
  }
}
