import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  standalone: false
})
export class CarritoPage {
  carrito: any[] = [];

  constructor(private cartService: CartService) {}

  ionViewWillEnter() {
    this.carrito = this.cartService.getCarrito();
  }

  eliminar(id: number) {
    this.cartService.eliminarProducto(id);
    this.carrito = this.cartService.getCarrito();
  }

  limpiar() {
    this.cartService.limpiarCarrito();
    this.carrito = [];
  }
}
