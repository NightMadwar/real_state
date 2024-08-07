import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Property } from './schemas/property.schema';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';

@Injectable()
export class PropertyService {
  constructor(@InjectModel(Property.name) private propertyModel: Model<Property>) {}

  async create(createPropertyDto: CreatePropertyDto): Promise<Property> {
    const createdProperty = new this.propertyModel(createPropertyDto);
    return createdProperty.save();
  }

  async findAll(): Promise<Property[]> {
    return this.propertyModel.find().exec();
  }

  async findOne(id: string): Promise<Property | null> {
    const property = await this.propertyModel.findById(id).exec();
    if (!property) {
      throw new NotFoundException(`Property with ID ${id} not found`);
    }
    return property;
  }

  async update(id: string, updatePropertyDto: UpdatePropertyDto): Promise<Property | null> {
    const updatedProperty = await this.propertyModel.findByIdAndUpdate(
      id,
      updatePropertyDto,
      { new: true }
    ).exec();
    if (!updatedProperty) {
      throw new NotFoundException(`Property with ID ${id} not found`);
    }
    return updatedProperty;
  }

  async remove(id: string): Promise<Property | null> {
    const deletedProperty = await this.propertyModel.findByIdAndDelete(id).exec();
    if (!deletedProperty) {
      throw new NotFoundException(`Property with ID ${id} not found`);
    }
    return deletedProperty;
  }
}
