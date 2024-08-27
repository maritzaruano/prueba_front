import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment'; // Asegúrate de importar desde el entorno correcto
import { HttpClient } from '@angular/common/http';
import { IListCard, IOpcionMenu } from '../interfaces/ICard.interface';

@Injectable({
  providedIn: 'root'
})
export class CardsTsService {

  private apiUrl = `${environment.apiUrl}/v1/test-front-end-skandia/cards`; // Usa la URL del entorno

  constructor(private http: HttpClient) { }
  
  getCards(): Observable<IListCard> {
    return this.http.get<IListCard>(this.apiUrl);
  }

  getOptionsMenu(): Observable<IOpcionMenu[]> {
    return of([
      {
        icono: "home.png",
        description: "Inicio",
        url: "",
        selected: true
      },
      {
        icono: "hoja1.png",
        description: "Contratos",
        url: "",
        selected: false
      }  
      ,
      {
        icono: "Tool.png",
        description: "Acciones",
        url: "",
        selected: false
      }  
      ,
      {
        icono: "star.png",
        description: "Objetivos",
        url: "",
        selected: false
      }  
      ,
      {
        icono: "money.png",
        description: "Herramienttas",
        url: "",
        selected: false
      } 
      ,
      {
        icono: "talk.png",
        description: "Servicio al cliente",
        url: "",
        selected: false
      } 
    ]);
  }

}
