import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // Asegúrate de importar desde el entorno correcto
import { HttpClient } from '@angular/common/http';
import { IListCard } from '../interfaces/ICard.interface';

@Injectable({
  providedIn: 'root'
})
export class CardsTsService {

  private apiUrl = `${environment.apiUrl}/v1/test-front-end-skandia/cards`; // Usa la URL del entorno

  constructor(private http: HttpClient) { }
  
  getCards(): Observable<IListCard> {
    return this.http.get<IListCard>(this.apiUrl);
  }

}
