import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map, tap } from 'rxjs';

@Injectable()
export class WrapResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('before .................');

    return (
      next
        .handle()
        // .pipe(tap((data) => console.log('After...........', data)));
        .pipe(map((data) => ({ data })))
    );
  }
}
