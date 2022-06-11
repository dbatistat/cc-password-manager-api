import { Module } from '@nestjs/common';
import { PasswordCardModule } from './password-card/password-card.module';

@Module({
  imports: [PasswordCardModule],
})
export class AppModule {}
