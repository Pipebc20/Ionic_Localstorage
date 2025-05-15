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
  productos: Producto[] = [
    { id: 1, nombre: 'Camiseta', precio: 50, cantidad: 1, descripcion: 'Camiseta de algodón, disponible en varias tallas y colores.' },
    { id: 2, nombre: 'Pantalón', precio: 100, cantidad: 1, descripcion: 'Pantalón cómodo y resistente, ideal para uso diario.' },
    { id: 3, nombre: 'Zapatos', precio: 150, cantidad: 1, descripcion: 'Zapatos de cuero, perfectos para ocasiones formales.' },
    { id: 4, nombre: 'Gorra', precio: 30, cantidad: 1, descripcion: 'Gorra ajustable, protege del sol y es un accesorio moderno.' },
    { id: 5, nombre: 'Chaqueta', precio: 200, cantidad: 1, descripcion: 'Chaqueta impermeable, ideal para días lluviosos y fríos.' }
  ];

  constructor(private cartService: CartService) {}

  agregar(producto: Producto): void {
    this.cartService.agregarProducto({ ...producto });
    // Puedes mostrar un mensaje de éxito de otra forma si lo prefieres
    // Ejemplo: this.mensaje = 'Producto agregado al carrito';
  }
}
