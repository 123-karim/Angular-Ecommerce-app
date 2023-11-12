import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServcartsService {

  constructor(private http:HttpClient) { }
  postcart(model:any){
    return this.http.post('https://fakestoreapi.com/carts',model) ;

  }
}
