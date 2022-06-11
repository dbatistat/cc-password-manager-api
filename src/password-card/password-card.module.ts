import { Module } from '@nestjs/common';
import { PasswordCardService } from './password-card.service';
import { PasswordCardController } from './password-card.controller';
import { PasswordCardRepository } from './password-card.repository';

@Module({
  providers: [PasswordCardRepository, PasswordCardService],
  controllers: [PasswordCardController],
})
export class PasswordCardModule {
}
