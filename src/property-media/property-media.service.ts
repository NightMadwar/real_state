import { Injectable } from '@nestjs/common';
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

  async findOne(id: string): Promise<PropertyMedia> {
    return this.propertyMediaModel.findById(id).exec();
  }

  async update(id: string, updatePropertyMediaDto: UpdatePropertyMediaDto): Promise<PropertyMedia> {
    return this.propertyMediaModel.findByIdAndUpdate(id, updatePropertyMediaDto, { new: true }).exec();
  }

  async remove(id: string): Promise<PropertyMedia> {
    return this.propertyMediaModel.findByIdAndDelete(id).exec();
  }
}
