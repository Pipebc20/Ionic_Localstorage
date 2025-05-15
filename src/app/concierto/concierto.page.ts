import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concierto',
  templateUrl: './concierto.page.html',
  styleUrls: ['./concierto.page.scss'],
})
export class ConciertoPage implements OnInit {

  concierto: any[] = [];

  constructor() { }
  agregar(precio_concierto: any) {
    this.concierto.push({ precio_concierto });
    alert('Precio Agregado');
  }

  eliminar(precio_concierto: any) {
    const index = this.concierto.indexOf(precio_concierto);
    if (index > -1) {
      this.concierto.splice(index, 1);
      alert('Precio Eliminado');
    }
  }

  ngOnInit() {
  }

}
