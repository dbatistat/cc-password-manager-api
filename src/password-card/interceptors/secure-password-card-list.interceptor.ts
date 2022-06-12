import { CallHandler, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PasswordCard } from '../password-card.types';

@Injectable()
export class SecurePasswordCardListInterceptor implements NestInterceptor {
  intercept(context, next: CallHandler): Observable<PasswordCard[]> {
    return next.handle().pipe(
      map((passwordCards: PasswordCard[]) => {
        return passwordCards.map(passwordCard => ({
          ...passwordCard,
          password: '***************',
        }));
      }),
    );
  }
}
