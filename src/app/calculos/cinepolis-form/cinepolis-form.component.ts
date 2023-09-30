import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis-form',
  templateUrl: './cinepolis-form.component.html',
  styleUrls: ['./cinepolis-form.component.css']
})
export class CinepolisFormComponent 
{
      nombre:string = "";
      catComprador:number = 0;
      catBoletos:number = 0;
      valor:number = 0;
      total:number = 0;

      pagar():void
      {
           if (this.catBoletos > 5) 
           {
               
           }

           else 
           {
            
           }
      }
}
