import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/proflie.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProfileService {

  constructor(@InjectModel(Profile.name) private profileModel: Model<Profile>) {}

  async create(createProflieDto: CreateProfileDto): Promise<Profile|object> {
    try{
      createProflieDto.id = Date.now().toString();
      createProflieDto.create_at = new Date();
      createProflieDto.update_at = new Date();
  
      const newProfile = new this.profileModel(createProflieDto);
      return await newProfile.save();
    }catch (e) {
      return {
        message: `Create profile failed`
      };
    }
  }

  async findAll(): Promise<Profile[]|object> {
    try{
      return  this.profileModel.find().exec();
    }catch (e) {
      return {
        message: `Get all profile failed`
      };
    }
  }

  async findOne(id: string): Promise<Profile|object> {
    try{
      return  this.profileModel.findOne({ id: id }).exec();
    }catch (e) {
      return {
        message: `Get profile ${id} failed`
      };
    }
  }

  async findOneByUID(uid: string): Promise<Profile|object> {
    try{
      return  this.profileModel.findOne({ uid: uid }).exec();
    }catch (e) {
      return {
        message: `Get profile ${uid} failed`
      };
    }
  }

  async update(id: string, updateProfileDto: UpdateProfileDto) {
    try{
      updateProfileDto.update_at = new Date();
      const newProfile=  await this.profileModel.updateOne({ id: id }, updateProfileDto).exec();  
      return {
        message: newProfile.acknowledged ? `Update profile ${id} successfully` : `Update profile ${id} failed`
      }
    }catch (e) {
      return {
        message: `Update profile ${id} failed`
      };
    }
  }

  async remove(id: string) {
    try{
      await this.profileModel.deleteOne({ id: id }).exec();
      return {
        message: `Delete profile ${id} successfully`
      };
    }catch (e) {
      return {
        message: `Delete profile ${id} failed`
      };
    }
  }
}
