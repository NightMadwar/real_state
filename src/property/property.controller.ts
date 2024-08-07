import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { ApiTags, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('property')
@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Post()
  @ApiOperation({ summary: 'Create property' })
  @ApiBody({ type: CreatePropertyDto })
  async create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertyService.create(createPropertyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all properties' })
  async findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get property by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Property ID' })
  async findOne(@Param('id') id: string) {
    return this.propertyService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update property' })
  @ApiParam({ name: 'id', required: true, description: 'Property ID' })
  @ApiBody({ type: UpdatePropertyDto })
  async update(@Param('id') id: string, @Body() updatePropertyDto: UpdatePropertyDto) {
    return this.propertyService.update(id, updatePropertyDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete property' })
  @ApiParam({ name: 'id', required: true, description: 'Property ID' })
  async remove(@Param('id') id: string) {
    return this.propertyService.remove(id);
  }
}
