import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileRelationDto } from './create-profile-relation.dto';

export class UpdateProfileRelationDto extends PartialType(CreateProfileRelationDto) {}
