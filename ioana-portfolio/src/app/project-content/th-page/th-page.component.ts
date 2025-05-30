import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { MatTooltipModule } from '@angular/material/tooltip';
import { DecimalPipe, NgForOf } from '@angular/common';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';

interface RoleData {
  name: string;
  value: number;
  color: string;
}

@Component({
  selector: 'app-tehilax-page',
  standalone: true,
  imports: [
    MatIconModule,
    MatTooltipModule,
    NgxChartsModule,
    DecimalPipe,
    NgForOf,
  ],
  templateUrl: './th-page.component.html',
  styleUrl: './th-page.component.scss',
})
export class TehilaxPageComponent {
  data = {
    role: {
      uniqueVisitors: 25500,
      chartData: [
        { name: 'Admin', value: 8000, color: '#805AD5' },
        { name: 'Manager', value: 6000, color: '#B794F4' },
        { name: 'Employee', value: 5000, color: '#63B3ED' },
        { name: 'Inspector', value: 3000, color: '#48BB78' },
        { name: 'Customer', value: 2000, color: '#F6AD55' },
        { name: 'Support', value: 1500, color: '#FC8181' },
      ] as RoleData[],
    },
  };

  colorScheme = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: this.data.role.chartData.map((d) => d.color),
  };
  constructor() {}
}
