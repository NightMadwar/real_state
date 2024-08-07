import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PropertyMedia } from './schemas/property-media.schema';
import { CreatePropertyMediaDto } from './dto/create-property-media.dto';
import { UpdatePropertyMediaDto } from './dto/update-property-media.dto';

@Injectable()
export class PropertyMediaService {
  constructor(@InjectModel(PropertyMedia.name) private propertyMediaModel: Model<PropertyMedia>) {}

  async create(createPropertyMediaDto: CreatePropertyMediaDto): Promise<PropertyMedia> {
    const createdPropertyMedia = new this.propertyMediaModel(createPropertyMediaDto);
    return createdPropertyMedia.save();
  }

  async findAll(): Promise<PropertyMedia[]> {
    return this.propertyMediaModel.find().exec();
  }

  async findOne(id: string): Promise<PropertyMedia | null> {
    const propertyMedia = await this.propertyMediaModel.findById(id).exec();
    if (!propertyMedia) {
      throw new NotFoundException(`PropertyMedia with ID ${id} not found`);
    }
    return propertyMedia;
  }

  async update(id: string, updatePropertyMediaDto: UpdatePropertyMediaDto): Promise<PropertyMedia | null> {
    const updatedPropertyMedia = await this.propertyMediaModel.findByIdAndUpdate(
      id,
      updatePropertyMediaDto,
      { new: true }
    ).exec();
    if (!updatedPropertyMedia) {
      throw new NotFoundException(`PropertyMedia with ID ${id} not found`);
    }
    return updatedPropertyMedia;
  }

  async remove(id: string): Promise<PropertyMedia | null> {
    const deletedPropertyMedia = await this.propertyMediaModel.findByIdAndDelete(id).exec();
    if (!deletedPropertyMedia) {
      throw new NotFoundException(`PropertyMedia with ID ${id} not found`);
    }
    return deletedPropertyMedia;
  }
}
