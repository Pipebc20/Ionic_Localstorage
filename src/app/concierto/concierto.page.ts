import { Component, OnInit } from '@angular/core';

interface Comprador {
  nombre: string;
  compro: boolean;
  seleccionado: boolean;
}

@Component({
  selector: 'app-concierto',
  templateUrl: './concierto.page.html',
  styleUrls: ['./concierto.page.scss'],
  standalone: false
})
export class ConciertoPage implements OnInit {
  compradores: Comprador[] = [];
  totalCompraron: number = 0;
  totalNoCompraron: number = 0;
  haySeleccionados: boolean = false;

  // Para añadir nuevos compradores
  nuevoNombre: string = '';
  nuevoCompro: boolean = false;

  constructor() { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    const datosGuardados = sessionStorage.getItem('conciertoCompradores');
    if (datosGuardados) {
      this.compradores = JSON.parse(datosGuardados).map((c: any) => ({
        ...c,
        seleccionado: c.seleccionado ?? false
      }));
    } else {
      this.compradores = [
        { nombre: 'Juan', compro: true, seleccionado: false },
        { nombre: 'Ana', compro: false, seleccionado: false },
        { nombre: 'Luis', compro: true, seleccionado: false }
      ];
    }
    this.actualizarTotales();
    this.actualizarSeleccionados();
  }

  onChange() {
    this.actualizarTotales();
    this.actualizarSeleccionados();
    this.guardarDatos();
  }

  actualizarTotales() {
    this.totalCompraron = this.compradores.filter(c => c.compro).length;
    this.totalNoCompraron = this.compradores.filter(c => !c.compro).length;
  }

  actualizarSeleccionados() {
    this.haySeleccionados = this.compradores.some(c => c.seleccionado);
  }

  guardarDatos() {
    sessionStorage.setItem('conciertoCompradores', JSON.stringify(this.compradores));
  }

  reiniciarDatos() {
    sessionStorage.removeItem('conciertoCompradores');
    this.compradores = [
      { nombre: 'Juan', compro: true, seleccionado: false },
      { nombre: 'Ana', compro: false, seleccionado: false },
      { nombre: 'Luis', compro: true, seleccionado: false }
    ];
    this.nuevoNombre = '';
    this.nuevoCompro = false;
    this.onChange();
  }
  eliminarSeleccionados() {
  this.compradores = this.compradores.filter(c => !c.seleccionado);
  this.actualizarTotales();
  this.actualizarSeleccionados();
  this.guardarDatos();
}


  agregarComprador() {
    if (this.nuevoNombre.trim() === '') {
      return;
    }

    this.compradores.push({
      nombre: this.nuevoNombre.trim(),
      compro: this.nuevoCompro,
      seleccionado: false
    });

    // Reset inputs
    this.nuevoNombre = '';
    this.nuevoCompro = false;

    this.onChange();
  }
}
