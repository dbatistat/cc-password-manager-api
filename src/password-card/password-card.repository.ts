import { BadRequestException, Injectable } from '@nestjs/common';
import {
  CreatePasswordCard,
  PasswordCard,
  UpdatePasswordCard,
} from './password-card.types';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PasswordCardRepository {
  private passwordCards: PasswordCard[] = [];

  getById(id: string): PasswordCard {
    return this.passwordCards.find(passwordCard => passwordCard.id);
  }

  filterByName(name: string): PasswordCard[] {
    if (!name) {
      return this.passwordCards;
    }

    return this.passwordCards.filter(pc => pc.name.includes(name));
  }

  create(create: CreatePasswordCard): PasswordCard {
    const passwordCard: PasswordCard = {
      id: uuid(),
      ...create,
    };

    this.passwordCards.push(passwordCard);

    return passwordCard;
  }

  update(id: string, update: UpdatePasswordCard): PasswordCard {
    const exist = this.getById(id);

    if (!exist) {
      throw new BadRequestException(`Current id ${id} doesn't exist`);
    }

    const index = this.passwordCards.findIndex(pc => pc.id === id);

    this.passwordCards[index] = {
      id: exist.id,
      name: update.name ?? exist.name,
      username: update.username ?? exist.username,
      password: update.password ?? exist.password,
      url: update.url ?? exist.url,
    };

    return this.passwordCards[index];
  }

  delete(id: string): void {
    const exist = this.getById(id);

    if (!exist) {
      throw new BadRequestException(`Current id ${id} doesn't exist`);
    }

    const index = this.passwordCards.findIndex(pc => pc.id === id);

    this.passwordCards.splice(index, 1);
  }
}
