import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  storeData: any;

  constructor(public getStoreInfo: StoreService) {}

  ngOnInit(): void {
    this.storeInfo();
  }

  storeInfo() {
    this.getStoreInfo.getStoreInfo('Georgia').subscribe((data) => {
      this.storeData = data;
      console.log('inside', this.storeData);
    });

    console.log(this.storeData);
  }
}
