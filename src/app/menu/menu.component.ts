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
      priceUSD: 42,
      priceRD: 2500,
      image: 'assets/1.jpg',
    },
    {
      title: 'Canasta Picnic',
      priceUSD: 49,
      priceRD: 2900,
      image: 'assets/2.jpg',
    },
    {
      title: 'Mini-Box',
      priceUSD: 30,
      priceRD: 1800,
      image: 'assets/3.jpg',
    },
    {
      title: 'Paquete 4',
      priceUSD: 3.5,
      priceRD: 195,
      image: 'assets/4.jpg',
    },
    {
      title: 'Paquete 5',
      priceUSD: 3.5,
      priceRD: 196,
      image: 'assets/5.jpg',
    },
    {
      title: 'Paquete 6',
      priceUSD: 3.5,
      priceRD: 196,
      image: 'assets/6.jpg',
    },
  ];
}
