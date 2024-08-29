import { Component } from '@angular/core';

@Component({
  selector: 'app-updating',
  templateUrl: './updating.component.html',
  styleUrl: './updating.component.scss',
})
export class UpdatingComponent {
  currentDate: Date = new Date();
}
