import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { ErrorHandler } from '../app.error-handler';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class MockService<T> {
  httpOptions: { headers: HttpHeaders };
  // private urlBase = `${environment.apiUrl}`;
  urlBase = 'https://my-json-server.typicode.com/thiagomarques/fakeJson/';

  constructor(protected http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  public getUrlBase(): string {
    return this.urlBase;
  }

  public abstract getUrl(): string;
  public abstract mapIdentificador(objeto: T): number;

  getDefaultRequestOptions() {
    return this.httpOptions;
  }

  obterTodos(): Observable<T[]> {
    return this.http.get<T[]>(`${this.getUrlBase()}/${this.getUrl()}`).pipe(
      // tap(_ => console.log('Listando registros')),
      catchError(ErrorHandler.handleError)
    );
  }

  obterPorId(id: number): Observable<T> {
    return this.http.get<T>(`${this.getUrlBase()}/${this.getUrl()}/${id}`, this.httpOptions).pipe(
      // tap(_ => console.log(`Listando por id=$${this.getUrlBase()}/${this.getUrl()}/${id}`)),
      catchError(ErrorHandler.handleError)
    );
  }

  adicionar(objeto: T) {
    return this.http.post(`${this.getUrlBase()}/${this.getUrl()}`, objeto, this.httpOptions).pipe(
      // tap(_ => console.log('Adicionando novo registro')),
      catchError(ErrorHandler.handleError)
    );
  }

  removerPorId(id: number): Observable<any> {
    // console.log('Servidor: ', id);
    return this.http.delete<any>(`${this.getUrlBase()}/${this.getUrl()}` + '/' + id, this.getDefaultRequestOptions()).pipe(
      // tap(_ => console.log(`deleted hero id=${id}`)),
      catchError(ErrorHandler.handleError)
    );
  }

  removerAll(): Observable<any> {
    return this.http
      .delete(`${this.getUrlBase()}/${this.getUrl()}`, this.getDefaultRequestOptions());
  }

  atualizarPorId(objeto: T, id) {
    return this.http.put(`${this.getUrlBase()}/${this.getUrl()}` + '/' + id, objeto, this.getDefaultRequestOptions()).pipe(
      // tap(_ => console.log(`deleted hero id=${id}`)),
      catchError(ErrorHandler.handleError)
    );
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
