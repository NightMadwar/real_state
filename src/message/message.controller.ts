import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { ApiTags, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('message')
@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  @ApiOperation({ summary: 'Send message' })
  @ApiBody({ type: CreateMessageDto })
  async create(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.create(createMessageDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all messages' })
  async findAll() {
    return this.messageService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get message by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Message ID' })
  async findOne(@Param('id') id: string) {
    return this.messageService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update message' })
  @ApiParam({ name: 'id', required: true, description: 'Message ID' })
  @ApiBody({ type: UpdateMessageDto })
  async update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto) {
    return this.messageService.update(id, updateMessageDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete message' })
  @ApiParam({ name: 'id', required: true, description: 'Message ID' })
  async remove(@Param('id') id: string) {
    return this.messageService.remove(id);
  }
}
