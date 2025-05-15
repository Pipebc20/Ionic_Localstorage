// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private CART_KEY = 'carrito';

  constructor() {}

  getCarrito(): any[] {
    const data = sessionStorage.getItem(this.CART_KEY);
    return data ? JSON.parse(data) : [];
  }

  agregarProducto(producto: any) {
    const carrito = this.getCarrito();
    const index = carrito.findIndex(p => p.id === producto.id);

    if (index >= 0) {
      carrito[index].cantidad += producto.cantidad;
    } else {
      carrito.push(producto);
    }

    sessionStorage.setItem(this.CART_KEY, JSON.stringify(carrito));
  }

  eliminarProducto(id: number) {
    let carrito = this.getCarrito();
    carrito = carrito.filter(p => p.id !== id);
    sessionStorage.setItem(this.CART_KEY, JSON.stringify(carrito));
  }

  limpiarCarrito() {
    sessionStorage.removeItem(this.CART_KEY);
  }
}
