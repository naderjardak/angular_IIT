import {Component, OnInit} from '@angular/core';
import {Client} from "../../../Model/Client";
import {Compte} from "../../../Model/Compte";
import {CrudService} from "../crud.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service:CrudService) {
  }

  compteList!:Compte[];
  clientList!:Client[];

  ngOnInit(){
    this.service.CompteList().subscribe(data=>{this.compteList=data;
      this.service.ClientList().subscribe(data=>{this.clientList=data});
    });

  }

  deleteClient(id:number| null){
 // @ts-ignore
    this.service.DeleteCompte(id).subscribe(data=>{ this.ngOnInit()})
}

}
