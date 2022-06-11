import { CallHandler, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PasswordCard, SecurePasswordCard } from '../password-card.types';

@Injectable()
export class SecurePasswordCardInterceptor implements NestInterceptor {
  intercept(context, next: CallHandler): Observable<SecurePasswordCard> {
    return next.handle().pipe(
      map((passwordCards: PasswordCard) => {
        return {
          id: passwordCards.id,
          name: passwordCards.name,
          username: passwordCards.username,
          url: passwordCards.url,
        };
      }),
    );
  }
}
