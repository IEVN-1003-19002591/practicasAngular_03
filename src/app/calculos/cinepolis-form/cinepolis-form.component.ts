import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis-form',
  templateUrl: './cinepolis-form.component.html',
  styleUrls: ['./cinepolis-form.component.css']
})
export class CinepolisFormComponent 
{
  nombre: string = "";
  catComprador: number = 0;
  catBoletos: number = 0;
  valor: number = 0;
  total: number = 0;
  tarjeta: string = "";

  Pagar(): void {
    const catBoletos = this.catBoletos;
    const catComprador = this.catComprador;
    const tarjeta = this.tarjeta === 'Si';
  
    let descuento = 0;
  
    if (catBoletos >= 5) 
    {
      descuento = 0.15; 
    } 
    
    else if (catBoletos >= 3 && catBoletos <= 5) 
    {
      descuento = 0.10; 
    }
  
    const precioBoleto = 12.000;
  
    let valor = catBoletos * precioBoleto * catComprador; 
    if (descuento > 0) 
    {
      valor -= valor * descuento;
    }
  
    if (tarjeta) 
    {
      const descuentoTarjeta = 0.10; 
      valor -= valor * descuentoTarjeta;
    }
  
    this.valor = valor;
    this.total = valor;
  }
}
