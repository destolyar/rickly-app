import { Observable } from 'rxjs';
import { IHttpOptions } from './http-options';

export interface IHttpClient {
    get<TResponse>(url: string, options: IHttpOptions): Observable<TResponse>;
    post<TResponse>(url: string, request: unknown, options: IHttpOptions): Observable<TResponse>;
}