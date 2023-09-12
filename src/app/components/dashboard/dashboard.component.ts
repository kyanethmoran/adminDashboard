import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  employeeData: any;
  employeeColumns: string[] = [
    'name',
    'position',
    'phone',
    'email',
    'edit',
    'delete',
  ];
  employeeSubscription: Subscription = new Subscription();

  constructor(public employees: StoreService) {}

  ngOnInit(): void {
    this.getEmployeeData();
  }

  ngOnDestroy(): void {
    this.employeeSubscription.unsubscribe();
  }

  getEmployeeData() {
    this.employeeSubscription = this.employees
      .getStoreEmployeeInfo('Georgia')
      .subscribe((data: any) => {
        this.employeeData = data;
      });
  }
}
