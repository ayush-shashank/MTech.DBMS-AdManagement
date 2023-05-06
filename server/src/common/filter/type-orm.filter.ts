import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { TypeORMError } from 'typeorm';

@Catch(TypeORMError)
export class TypeOrmFilter implements ExceptionFilter {
  catch(exception: TypeORMError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const message: string = (exception as TypeORMError).message;
    const code: number = (exception as any).code;
    const customResponse = {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Something Went Wrong',
      type: 'Internal server error',
      errors: [{ code: code, message: message }],
      errorCode: 300,
      timestamp: new Date().toISOString(),
    };

    response.status(customResponse.statusCode).json(customResponse);
  }
}
