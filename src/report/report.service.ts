import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Report } from './schemas/report.schema';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Injectable()
export class ReportService {
  constructor(@InjectModel(Report.name) private reportModel: Model<Report>) {}

  async create(createReportDto: CreateReportDto): Promise<Report> {
    const createdReport = new this.reportModel(createReportDto);
    return createdReport.save();
  }

  async findAll(): Promise<Report[]> {
    return this.reportModel.find().exec();
  }

  async findOne(id: string): Promise<Report | null> {
    const report = await this.reportModel.findById(id).exec();
    if (!report) {
      throw new NotFoundException(`Report with ID ${id} not found`);
    }
    return report;
  }

  async update(id: string, updateReportDto: UpdateReportDto): Promise<Report | null> {
    const updatedReport = await this.reportModel.findByIdAndUpdate(
      id,
      updateReportDto,
      { new: true }
    ).exec();
    if (!updatedReport) {
      throw new NotFoundException(`Report with ID ${id} not found`);
    }
    return updatedReport;
  }

  async remove(id: string): Promise<Report | null> {
    const deletedReport = await this.reportModel.findByIdAndDelete(id).exec();
    if (!deletedReport) {
      throw new NotFoundException(`Report with ID ${id} not found`);
    }
    return deletedReport;
  }
}
