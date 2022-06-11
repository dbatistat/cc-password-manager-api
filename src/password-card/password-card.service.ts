import { Injectable } from '@nestjs/common';
import { CreatePasswordCard, PasswordCard, UpdatePasswordCard } from './password-card.types';
import { PasswordCardRepository } from './password-card.repository';

@Injectable()
export class PasswordCardService {
  constructor(private passwordCardRepository: PasswordCardRepository) {
  }

  getById(id: string): PasswordCard {
    return this.passwordCardRepository.getById(id);
  }

  filterByName(name: string): PasswordCard[] {
    return this.passwordCardRepository.filterByName(name);
  }

  create(create: CreatePasswordCard): PasswordCard {
    return this.passwordCardRepository.create(create);
  }

  update(id: string, update: UpdatePasswordCard): PasswordCard {
    return this.passwordCardRepository.update(id, update);
  }

  delete(id: string): void {
    this.passwordCardRepository.delete(id);
  }
}
