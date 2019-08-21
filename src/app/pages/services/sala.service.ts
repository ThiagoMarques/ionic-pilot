import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MockService } from '../../services/mock.service';
import { Sala } from '../models/sala.model';

@Injectable({
  providedIn: 'root'
})
export class SalaService extends MockService<Sala> {
  Salas: Sala[];

  constructor(protected http: HttpClient) {
    super(http);
  }

  public getUrl(): string {
    return 'salas';
  }

  public mapIdentificador(objeto: Sala): number {
    return objeto.id;
  }

  getSala(): Observable<Sala[]> {
    return super.obterTodos();
  }

  getSalaId(id: number): Observable<Sala> {
    return super.obterPorId(id);
  }
  get() {
    return new Promise(resolve => resolve(this.Salas));
  }
  addSala(sala: Sala): Observable<any> {
    return super.adicionar(sala);
  }

  deleteSala(id: number): Observable<Sala> {
    return super.removerPorId(id);
  }

  updateSala(id, sala: Sala): Observable<any> {
    return super.atualizarPorId(sala, id);
  }
}
