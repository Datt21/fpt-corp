import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, from, lastValueFrom } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { ResponseCodeEnum } from '../../core/enums/response-code.enum';

export const MAXRETRIES = 2;
export const DELAYMS = 2000;

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private _router: Router) {}
  /**
   * Intercept
   *
   * @param request
   * @param next
   */
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let newHeaders = new HttpHeaders();

    const token = '';

    // If have a token then append to new headers
    if (token) {
      newHeaders = newHeaders.set('Authorization', `Bearer ${token}`);
    }

    // Attach lang to header
    //   const lang = this._translateService.language
    //     ? this._translateService.language
    //     : LanguageCodeEnum.Japanese;

    //   newHeaders = newHeaders.set('lang', lang);

    const newReq = request.clone({
      withCredentials: true,
      headers: newHeaders,
    });

    return from(this.handle(newReq, next));
  }

  async handle(req: HttpRequest<any>, next: HttpHandler) {
    return await lastValueFrom(
      next.handle(req).pipe(
        catchError((error) => {
          // Catch "401 Unauthorized" responses
          if (
            error instanceof HttpErrorResponse &&
            error.status === ResponseCodeEnum.UNAUTHORIZED
          ) {
            this._router.navigate(['../login']);
          }

          return throwError(error);
        })
      )
    );
  }
}
