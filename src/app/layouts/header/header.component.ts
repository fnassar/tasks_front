import { Component } from '@angular/core';
import { DateModule } from '../../modules/date/date.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
