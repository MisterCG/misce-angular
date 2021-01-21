import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  constructor( private route: ActivatedRoute ) { 
    this.route.params.subscribe( route => {
      console.log('RUTA PADRE');
      console.log(route);
    });
  }

  ngOnInit(): void {
  }

}
