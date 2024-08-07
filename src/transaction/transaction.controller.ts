import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ApiTags, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('transaction')
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  @ApiOperation({ summary: 'Create transaction' })
  @ApiBody({ type: CreateTransactionDto })
  async create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.create(createTransactionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all transactions' })
  async findAll() {
    return this.transactionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get transaction by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Transaction ID' })
  async findOne(@Param('id') id: string) {
    return this.transactionService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update transaction' })
  @ApiParam({ name: 'id', required: true, description: 'Transaction ID' })
  @ApiBody({ type: UpdateTransactionDto })
  async update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.transactionService.update(id, updateTransactionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete transaction' })
  @ApiParam({ name: 'id', required: true, description: 'Transaction ID' })
  async remove(@Param('id') id: string) {
    return this.transactionService.remove(id);
  }
}
