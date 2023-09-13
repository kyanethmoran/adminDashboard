import { Component } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
})
export class MaintenanceComponent {
  contractorColumns: string[] = ['position', 'name', 'phone', 'email'];
  contractorTableTitle: string = 'Maintanence Contractors';
  contractorTableData: any;

  constructor() {}
}
