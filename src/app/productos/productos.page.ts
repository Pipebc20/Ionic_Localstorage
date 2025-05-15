import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  standalone: false
})
export class ProductosPage {
  productos = [
    { id: 1, nombre: 'Camiseta', precio: 50, cantidad: 1 },
    { id: 2, nombre: 'Pantalón', precio: 100, cantidad: 1 }
  ];

  constructor(private cartService: CartService) {}

  agregar(producto: any) {
    this.cartService.agregarProducto({ ...producto });
    alert('Producto agregado al carrito');
  }
}
