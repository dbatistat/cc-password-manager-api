import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put, Query,
  UseInterceptors,
} from '@nestjs/common';
import { PasswordCard, UpdatePasswordCard } from './password-card.types';
import { PasswordCardService } from './password-card.service';
import { CreatePasswordCardDto } from './dto/create-password-card.dto';
import { SecurePasswordCardInterceptor } from './interceptors/secure-password-card.interceptor';
import { SecurePasswordCardListInterceptor } from './interceptors/secure-password-card-list.interceptor';
import { UpdatePasswordCardDto } from './dto/update-password-card.dto';

@Controller('password-card')
export class PasswordCardController {
  constructor(private passwordCardService: PasswordCardService) {}

  @Get()
  @UseInterceptors(SecurePasswordCardListInterceptor)
  filterByName(@Query('name') name: string): PasswordCard[] {
    return this.passwordCardService.filterByName(name);
  }

  @Get(':id')
  getById(@Param('id') id: string): PasswordCard {
    return this.passwordCardService.getById(id);
  }

  @Post()
  @UseInterceptors(SecurePasswordCardInterceptor)
  create(@Body() create: CreatePasswordCardDto): PasswordCard {
    return this.passwordCardService.create(create);
  }

  @Put(':id')
  @UseInterceptors(SecurePasswordCardInterceptor)
  async update(
    @Param('id') id: string,
    @Body() update: UpdatePasswordCardDto,
  ): Promise<PasswordCard> {
    return this.passwordCardService.update(id, update);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    this.passwordCardService.delete(id);
  }
}
