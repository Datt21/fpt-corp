import { ResponseCodeEnum } from '../enums/response-code.enum';

export class BaseResponse<T> {
  code: ResponseCodeEnum | undefined;
  message: string | undefined;
  data: T | undefined;
}
