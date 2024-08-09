import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SloganComponent } from '../slogan/slogan.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, SloganComponent, FooterComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
