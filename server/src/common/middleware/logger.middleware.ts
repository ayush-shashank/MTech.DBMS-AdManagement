import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    Logger.log(req.path, req.method);
    res.on('finish', () => {
      const message = res.statusMessage;
      const code = res.statusCode.toString();
      if (res.statusCode >= 500) Logger.error(message, code);
      else if (res.statusCode >= 400) Logger.warn(message, code);
      else if (res.statusCode >= 300) Logger.debug(message, code);
      else if (res.statusCode >= 200) Logger.verbose(message, code);
      else Logger.log(message, code);
      //   Logger.error(
      //     `${res.statusCode} - ${res.statusMessage}`,
      //     `${req.method} ${req.path}`,
      //   );
    });
    next();
  }
}
