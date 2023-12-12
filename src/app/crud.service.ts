import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Client} from "../../Model/Client";
import {Compte} from "../../Model/Compte";

const headers = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private http:HttpClient) {
  }


  clientList="http://localhost:8084/Client/listClient"
  compteList="http://localhost:8084/Compte/getAll"
  deleteCompte="http://localhost:8084/Compte/deleteCompte?id="

  ClientList() {
    return this.http.get<Client[]>(this.clientList,headers);
  }

  CompteList()
  {
    return this.http.get<Compte[]>(this.compteList,headers);
  }

  DeleteCompte(id:number)
  {
    return this.http.delete(this.deleteCompte+`${id}`,headers);
  }
}
