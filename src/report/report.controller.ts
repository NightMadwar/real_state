import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { ApiTags, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('report')
@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post()
  @ApiOperation({ summary: 'Create report' })
  @ApiBody({ type: CreateReportDto })
  async create(@Body() createReportDto: CreateReportDto) {
    return this.reportService.create(createReportDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all reports' })
  async findAll() {
    return this.reportService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get report by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Report ID' })
  async findOne(@Param('id') id: string) {
    return this.reportService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update report' })
  @ApiParam({ name: 'id', required: true, description: 'Report ID' })
  @ApiBody({ type: UpdateReportDto })
  async update(@Param('id') id: string, @Body() updateReportDto: UpdateReportDto) {
    return this.reportService.update(id, updateReportDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete report' })
  @ApiParam({ name: 'id', required: true, description: 'Report ID' })
  async remove(@Param('id') id: string) {
    return this.reportService.remove(id);
  }
}
