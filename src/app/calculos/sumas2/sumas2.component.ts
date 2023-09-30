import { Component } from '@angular/core';

@Component({
  selector: 'app-sumas2',
  templateUrl: './sumas2.component.html',
  styleUrls: ['./sumas2.component.css']
})
export class Sumas2Component {
  num1=0;
  num2=0;
  res=0;

  sumar()
  {
    this.res=this.num1+this.num2;
  }
}
