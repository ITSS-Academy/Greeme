import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileDto } from './create-profile.dto';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
    phone: string;
    description: string;
    address: string;
    avatar: string;
    boD: string;
    update_at: Date;
}
