import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
  <!--
    <p [ngStyle]="{ 'font-size': '15px' }">
      Hola esta es una app de angular
    </p>

    <p [ngStyle]="{ 'font-size': tamano+'px' }">
      Hola esta es una app de angular
    </p>
  -->
  <!-- Propiedad del tamaño de la letra en px  -->
  <p [style.fontSize.px]="tamano">
    Hola esta es una app de angular
  </p>
  <button class="btn btn-primary" (click)="tamano = tamano + 5">
    <i class="fa fa-plus"></i>
  </button>
  <button class="btn btn-secondary" (click)="tamano = tamano - 5">
    <i class="fa fa-minus"></i>
  </button>
    
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamano: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
