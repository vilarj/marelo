import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SloganComponent } from '../slogan/slogan.component';

@Component({
  selector: 'About',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, SloganComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
