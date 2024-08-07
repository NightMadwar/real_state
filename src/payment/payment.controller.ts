import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { ApiTags, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('payment')
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  @ApiOperation({ summary: 'Create payment' })
  @ApiBody({ type: CreatePaymentDto })
  async create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all payments' })
  async findAll() {
    return this.paymentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get payment by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Payment ID' })
  async findOne(@Param('id') id: string) {
    return this.paymentService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update payment' })
  @ApiParam({ name: 'id', required: true, description: 'Payment ID' })
  @ApiBody({ type: UpdatePaymentDto })
  async update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentService.update(id, updatePaymentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete payment' })
  @ApiParam({ name: 'id', required: true, description: 'Payment ID' })
  async remove(@Param('id') id: string) {
    return this.paymentService.remove(id);
  }
}
