import { Injectable, NestMiddleware } from '@nestjs/common';
import { Console } from 'console';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request:', req.baseUrl );
    next();
  }
}
