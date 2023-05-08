import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-content',
  templateUrl: './dash-content.component.html',
  styleUrls: ['./dash-content.component.scss'],
})
export class DashContentComponent {
  activities: { id: number; date: Date; description: string }[] = [
    { id: 1, date: new Date(), description: 'string' },
    { id: 2, date: new Date(), description: 'string' },
    { id: 3, date: new Date(), description: 'string' },
    { id: 4, date: new Date(), description: 'string' },
    { id: 5, date: new Date(), description: 'string' },
  ];
}
