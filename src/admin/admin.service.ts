import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin.name) private adminModel: Model<Admin>) {}
  async create(createAdminDto: CreateAdminDto) : Promise<Admin>  {
    try {
      const newAppointment = new this.adminModel(createAdminDto);
      return await newAppointment.save();
    } catch (error) {
      throw new ConflictException('Error creating admin: ' + error.message);
    }
  }

  findAll() : Promise<Admin[]> {
    return this.adminModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
