import { Component } from '@angular/core';

@Component({
  selector: 'app-suma-multi',
  templateUrl: './suma-multi.component.html',
  styleUrls: ['./suma-multi.component.css']
})
export class SumaMultiComponent {
  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  sumaNumeros: number[] = [];

  multiplicar(): void 
  {
    const num1Value = parseInt(this.num1);
    const num2Value = parseInt(this.num2);

    if (!isNaN(num1Value) && !isNaN(num2Value)) 
    {
      this.resultado = num1Value * num2Value;
      this.sumaNumeros = this.calcularSuma(num1Value, num2Value);
    } 
    
    else 
    {
      this.resultado = 0;
      this.sumaNumeros = [];
    }
  }

  calcularSuma(num1Value: number, num2Value: number): number[] 
  {
    const suma: number[] = [];
    for (let i = 0; i < num2Value; i++) 
    {
      suma.push(num1Value);
    }
    return suma;
  }

  mostrarResultado(): string 
  {
    const num1Value = parseInt(this.num1);
    const num2Value = parseInt(this.num2);

    if (!isNaN(num1Value) && !isNaN(num2Value)) 
    {
      const multiplicacion = num1Value * num2Value;
      const suma = this.sumaNumeros.join(' + ');
      return `${num1Value} * ${num2Value} = ${multiplicacion}, sumatoria: ${suma} = ${this.resultado}`;
    } 
    
    else 
    {
      return 'Por favor, ingrese números válidos.';
    }
  }
  
}
