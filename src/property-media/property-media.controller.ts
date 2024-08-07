import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertyMediaService } from './property-media.service';
import { CreatePropertyMediaDto } from './dto/create-property-media.dto';
import { UpdatePropertyMediaDto } from './dto/update-property-media.dto';
import { ApiTags, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('property-media')
@Controller('property-media')
export class PropertyMediaController {
  constructor(private readonly propertyMediaService: PropertyMediaService) {}

  @Post()
  @ApiOperation({ summary: 'Create property media' })
  @ApiBody({ type: CreatePropertyMediaDto })
  async create(@Body() createPropertyMediaDto: CreatePropertyMediaDto) {
    return this.propertyMediaService.create(createPropertyMediaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all property media' })
  async findAll() {
    return this.propertyMediaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get property media by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Property Media ID' })
  async findOne(@Param('id') id: string) {
    return this.propertyMediaService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update property media' })
  @ApiParam({ name: 'id', required: true, description: 'Property Media ID' })
  @ApiBody({ type: UpdatePropertyMediaDto })
  async update(@Param('id') id: string, @Body() updatePropertyMediaDto: UpdatePropertyMediaDto) {
    return this.propertyMediaService.update(id, updatePropertyMediaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete property media' })
  @ApiParam({ name: 'id', required: true, description: 'Property Media ID' })
  async remove(@Param('id') id: string) {
    return this.propertyMediaService.remove(id);
  }
}
