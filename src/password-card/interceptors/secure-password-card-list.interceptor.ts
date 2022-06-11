import { CallHandler, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PasswordCard, SecurePasswordCard } from '../password-card.types';

@Injectable()
export class SecurePasswordCardListInterceptor implements NestInterceptor {
  intercept(context, next: CallHandler): Observable<SecurePasswordCard[]> {
    return next.handle().pipe(
      map((passwordCards: PasswordCard[]) => {
        return passwordCards.map(pc => ({
          id: pc.id,
          name: pc.name,
          username: pc.username,
          url: pc.url,
        }));
      }),
    );
  }
}
