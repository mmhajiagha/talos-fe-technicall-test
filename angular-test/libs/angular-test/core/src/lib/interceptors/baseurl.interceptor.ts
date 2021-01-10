import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../../apps/angular-test/src/environments/environment';

const exceptionList: Array<any> = ['/assets/', 'assets/i18n/', 'assets/images'];

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url} = request;
    let isUrlException = false;
    exceptionList.forEach(exception => {
      if (url.includes(exception)) {
        isUrlException = true;
      }
    });
    if (!isUrlException) {
      request = request.clone({
        url: environment.apiUrl + url
      });
    }
    return next.handle(request);
  }
}
