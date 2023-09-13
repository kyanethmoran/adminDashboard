import { Component } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
})
export class MaintenanceComponent {
  contractorColumns: string[] = ['Name', 'Specialty', 'Phone', 'Email'];
  contractorTableTitle: string = 'Maintanence Contractors';
  contractorTableData: any;

  constructor() {}
}
