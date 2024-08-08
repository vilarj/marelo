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
      title: 'Paquete 1',
      priceUSD: 3.5,
      priceRD: 196,
      image: 'assets/1.jpg',
    },
    {
      title: 'Paquete 2',
      priceUSD: 3.5,
      priceRD: 196,
      image: 'assets/2.jpg',
    },
    {
      title: 'Paquete 3',
      priceUSD: 3.5,
      priceRD: 196,
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
