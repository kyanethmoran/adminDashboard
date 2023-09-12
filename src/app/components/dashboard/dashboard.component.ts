import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  employeeData: any;

  constructor(public employees: StoreService) {}

  ngOnInit(): void {
    this.getEmployeeData();
  }

  getEmployeeData() {
    this.employees.getStoreEmployeeInfo('Georgia').subscribe((data: any) => {
      this.employeeData = data;
    });
  }
}
