import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "../interfaces/store.interfaces";


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiURL ='http://localhost:3000';
  constructor(private http:HttpClient){}

  getStore():Observable<Store[]>{
    return this.http.get<Store[]>(`${this.apiURL}/stores`)
  }
}
