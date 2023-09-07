import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IssuePriorityService } from './issue_priority.service';
import { CreateIssuePriorityDto } from './dto/create-issue_priority.dto';
import { UpdateIssuePriorityDto } from './dto/update-issue_priority.dto';

@Controller('issue-priorities')
export class IssuePriorityController {
  constructor(private readonly issuePriorityService: IssuePriorityService) {}

  @Post()
  create(@Body() createIssuePriorityDto: CreateIssuePriorityDto) {
    return this.issuePriorityService.create(createIssuePriorityDto);
  }

  @Get()
  findAll() {
    return this.issuePriorityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.issuePriorityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIssuePriorityDto: UpdateIssuePriorityDto) {
    return this.issuePriorityService.update(+id, updateIssuePriorityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.issuePriorityService.remove(+id);
  }
}
