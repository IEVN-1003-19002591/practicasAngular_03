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
  valor: number = 0.0;
  total: number = 0.0;
  tarjeta: string = "";

  Pagar(): void {
    const catBoletos = this.catBoletos;
    const catComprador = this.catComprador;
    const tarjeta = this.tarjeta === 'Si';
    const precioBoleto = 12.000;
  
    let descuento = 0;
    let valor = catBoletos * precioBoleto;
  
    if (catComprador < 3 && (catBoletos + catComprador) > 7) 
    {
      window.alert("La cantidad no debe exceder de 7 boletos en total si hay menos de 2 o 3 clientes.\n\nCantidad de boletos: " + catBoletos + "\nCantidad de compradores: " + catComprador);
    } 

    else 
    {
      if (catComprador >= 3) 
      {
        descuento = 0.15;
      } 
      
      else 
      {
        if (catBoletos >= 7) 
        {
          descuento = 0.15;
        } 
        
        else if (catBoletos >= 5 && catBoletos < 7) 
        {
          descuento = 0.15;
        } 
        
        else if (catBoletos >= 3 && catBoletos < 5) 
        {
          descuento = 0.10;
        }
      }
  
      if (descuento > 0) {
        valor -= valor * descuento;
      }
  
      if (tarjeta) {
        const descuentoTarjeta = 0.10;
        valor -= valor * descuentoTarjeta;
      }
  
      this.valor = valor = parseFloat(valor.toFixed(2));
      this.total = valor = parseFloat(valor.toFixed(2));
    }
  }
  
}
