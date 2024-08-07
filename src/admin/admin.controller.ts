import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.schema';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async create(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
    return this.adminService.create(createAdminDto);
  }

  @Get()
  async findAll(): Promise<Admin[]> {
    return this.adminService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Admin> {
    const admin = await this.adminService.findOne(id);
    if (!admin) {
      throw new NotFoundException(`Admin with ID ${id} not found`);
    }
    return admin;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto): Promise<Admin> {
    const updatedAdmin = await this.adminService.update(id, updateAdminDto);
    if (!updatedAdmin) {
      throw new NotFoundException(`Admin with ID ${id} not found`);
    }
    return updatedAdmin;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Admin> {
    const deletedAdmin = await this.adminService.remove(id);
    if (!deletedAdmin) {
      throw new NotFoundException(`Admin with ID ${id} not found`);
    }
    return deletedAdmin;
  }
}
