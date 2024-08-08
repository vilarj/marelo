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
      title: 'Espresso',
      priceUSD: 3.5,
      priceRD: 196,
      image: 'assets/logo.jpeg',
    },
    {
      title: 'Cappuccino',
      priceUSD: 3.5,
      priceRD: 196,
      image: 'assets/logo.jpeg',
    },
    {
      title: 'Latte',
      priceUSD: 3.5,
      priceRD: 196,
      image: 'assets/logo.jpeg',
    },
    {
      title: 'Latte',
      priceUSD: 3.5,
      priceRD: 195,
      image: 'assets/logo.jpeg',
    },
    {
      title: 'Latte',
      priceUSD: 3.5,
      priceRD: 196,
      image: 'assets/logo.jpeg',
    },
    {
      title: 'Latte',
      priceUSD: 3.5,
      priceRD: 196,
      image: 'assets/logo.jpeg',
    },
  ];
}
