import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  descripcion?: string;
}

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

  agregar(producto: Producto): void {
    this.cartService.agregarProducto({ ...producto });
    // Puedes mostrar un mensaje de éxito de otra forma si lo prefieres
    // Ejemplo: this.mensaje = 'Producto agregado al carrito';
  }
}
