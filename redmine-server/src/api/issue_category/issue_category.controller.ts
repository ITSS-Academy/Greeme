import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { IssueCategoryService } from './issue_category.service';
import { CreateIssueCategoryDto } from './dto/create-issue_category.dto';
import { UpdateIssueCategoryDto } from './dto/update-issue_category.dto';

@Controller('issue-categories')
export class IssueCategoryController {
  constructor(private readonly issueCategoryService: IssueCategoryService) {}

  @Post()
  create(@Body() createIssueCategoryDto: CreateIssueCategoryDto) {
    return this.issueCategoryService.create(createIssueCategoryDto);
  }

  @Get()
  findAll(@Query('projectId') idProject: any) {
    return this.issueCategoryService.findAll(idProject);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.issueCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIssueCategoryDto: UpdateIssueCategoryDto) {
    return this.issueCategoryService.update(+id, updateIssueCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.issueCategoryService.remove(+id);
  }
}
