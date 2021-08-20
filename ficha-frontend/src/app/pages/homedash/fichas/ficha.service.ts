import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Ficha } from './ficha';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class FichasService implements OnInit { 



  constructor(private httpClient: HttpClient) {}

  private baseURL = 'http://localhost/ficha';




  ngOnInit(): void {
 
    this.httpClient.get<Ficha[]>('http://localhost/ficha').subscribe(
      data => {
        this.fichas = data;
        console.log(this.fichas);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client-side error occured.");
      } else {
        console.log("Server-side error occured.");
      }
    });
  }
  fichas: Ficha[] = [];

  selectedFicha: Ficha = {
    name: '',
    mid_n: '',
    last_n: '',
    titulo: '',
    years: '',
    ciudad: '',
    editorial: '',
  };


    //Metodo para solicitar al servidor, por el metodo GET, los usuarios existentes
    getFicha(): Observable<any> {
      const url = `${this.baseURL}`;
      return this.httpClient.get(url);
    }
  
    createFicha(ficha: Ficha): Observable<any> {
      return this.httpClient.post(`${this.baseURL}`, ficha);
    }
  
    editFicha(ficha: Ficha): Observable<any> {
      return this.httpClient.put(`${this.baseURL}/${ficha.titulo}`, ficha);
    }
  
    deleteFicha(ficha: Ficha): Observable<any> {
      const id = ficha.titulo;
      return this.httpClient.delete(`${this.baseURL}/` + id);
    }

}
