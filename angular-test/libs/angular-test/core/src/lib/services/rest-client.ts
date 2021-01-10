import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Json2TypescriptHelper} from '../utils';
import {ListResponseModel} from '@angular-test/app-models/common';

@Injectable({
  providedIn: 'root',
})
export class RestClient {

  constructor(private httpClient: HttpClient) {

  }

  private static createPostRequestBody(data: any): any {
    return data;
  }

  private static createPutRequestBody(data: any): any {
    return data;
  }

  /**
   * Send a GET request and returns the response body in a given type.
   *
   * @param fullUrl The endpoint URL.
   * @param classRef The class of the returned object
   * @param options The HTTP options to send with the request.
   *
   * @return An `Observable` of the `HTTPResponse`, with a response body in the requested type.
   */
  public sendGetRequest<T>(fullUrl: string, classRef: new() => T, options?: any): Observable<T> {
    return this.helpSendGetRequest(fullUrl, classRef, options);
  }

  /**
   * Send a GET request to retrieve a listing of all existing entities from backend (as accessible by current user).
   *
   * @param baseUrl the url
   * @param classRef the class of the returned objects
   * @param options
   * @return the list of fetched objects
   */
  public sendGetListRequest<T>(baseUrl: string, classRef: new() => T, options?: any): Observable<ListResponseModel<T>> {
    return this.httpClient
    .get<any>(baseUrl).pipe(
      map(res =>
        Json2TypescriptHelper.convertToEntities(res, classRef)
      )
    );
  }

  /**
   * Send a POST request to backend and returns the response body in a given type.
   *
   * @param fullUrl The endpoint URL.
   * @param data The content to replace with.
   * @param classRef The class of the returned object
   * @param options The HTTP options to send with the request.
   *
   * @return  An `Observable` of the `HTTPResponse`, with a response body in the requested type.
   */

  public sendPostRequest<T>(fullUrl: string, data: any, classRef: new() => T, options?: any): Observable<T> {
    const body = RestClient.createPostRequestBody(data);
    return this.helpSendPostRequest(body, fullUrl, classRef, options);
  }

  /**
   * Send a PUT request to backend and returns the response body in a given type.
   *
   * @param fullUrl The endpoint URL.
   * @param data The content to replace with.
   * @param classRef The class of the returned object
   * @param options The HTTP options to send with the request.
   *
   * @return  An `Observable` of the `HTTPResponse`, with a response body in the requested type.
   */
  public sendPutRequest<T>(fullUrl: string, data: any, classRef: new() => T, options?: any): Observable<T> {
    const body = RestClient.createPutRequestBody(data);
    return this.helpSendPutRequest(body, fullUrl, classRef, options);
  }

  /**
   * Send a DELETE request to backend and returns the response body in a given type.
   *
   * @param fullUrl
   * @param classRef
   * @param options
   *
   * @return  An `Observable` of the `HTTPResponse`, with a response body in the requested type.
   */
  public sendDeleteRequest<T>(fullUrl: string, classRef: new() => T, options?: any): Observable<T> {
    return this.helpSendDeleteRequest(fullUrl, classRef, options);
  }

  private helpSendGetRequest<T>(fullUrl: string, classRef: new() => T, options?: any): Observable<T> {
    return this.httpClient
    .get<any>(fullUrl, options)
    .pipe(
      map(res => {
        return Json2TypescriptHelper.convertToEntity(res, classRef);
      }),
    );
  }

  private helpSendPostRequest<T>(body: any, fullUrl: string, classRef: new() => T, options?: any): Observable<T> {
    return this.httpClient
    .post<any>(fullUrl, body, options)
    .pipe(
      map(res => {
        return Json2TypescriptHelper.convertToEntity(res, classRef);
      }),
    );
  }

  private helpSendPutRequest<T>(body: any, fullUrl: string, classRef: new() => T, options?: any): Observable<T> {
    return this.httpClient
    .put<any>(fullUrl, body, options)
    .pipe(
      map(res => {
        return Json2TypescriptHelper.convertToEntity(res, classRef);
      }),
    );
  }

  private helpSendDeleteRequest<T>(fullUrl: string, classRef: new() => T, options?: any): Observable<T> {
    return this.httpClient
    .delete<any>(fullUrl, options)
    .pipe(
      map(res => {
        return Json2TypescriptHelper.convertToEntity(res, classRef);
      }),
    );
  }
}
