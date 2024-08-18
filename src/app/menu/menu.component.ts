import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'Menu',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  menuItems = [
    {
      title: 'Tabla Fria en Envase de Caja',
      priceRD: 2500,
      image: 'assets/1.jpg',
    },
    {
      title: 'Canasta Picnic',
      priceRD: 2900,
      image: 'assets/2.jpg',
    },
    {
      title: 'Mini-Box',
      priceRD: 1800,
      image: 'assets/3.jpg',
    },
    {
      title: 'Special Box',
      priceRD: 2000,
      image: 'assets/4.jpg',
    },
    {
      title: 'Bandeja Cilíndrica o Cuadrada',
      priceRD: 4000,
      image: 'assets/5.jpg',
    },
    {
      title: 'Desayuno Amoroso',
      priceRD: 4300,
      image: 'assets/6.jpg',
    },
  ];
}
