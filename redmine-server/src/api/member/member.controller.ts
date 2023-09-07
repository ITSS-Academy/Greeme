import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post()
  create(@Body() createMemberDto: CreateMemberDto, @Query("projectId") idProject: any) {
    return this.memberService.create(createMemberDto,idProject);
  }

  @Get()
  findAll(@Query("projectId") idProject: any) {
    return this.memberService.findAll(idProject);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() updateMemberDto: UpdateMemberDto) {
    return this.memberService.update(id, updateMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memberService.remove(+id);
  }
}
