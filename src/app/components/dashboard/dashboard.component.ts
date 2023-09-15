import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  loading: boolean = true;
  employeeSubscription: Subscription = new Subscription();

  employeeColumns: string[] = ['name', 'role', 'phone', 'email'];
  employeeTableTitle: string = 'Employees';
  employeeData: any;

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

    this.loading = false;
  }
}
