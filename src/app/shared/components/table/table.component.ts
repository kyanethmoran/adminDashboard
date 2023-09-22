import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tableData: any;
  @Input() tableColumns: any;
  @Input() tableTitle: any;
  @Input() tableActions: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource: any;

  constructor() {}

  ngOnInit() {
    this.checkTableActions();
    this.tableData = new MatTableDataSource<any>(this.tableData);

    this.tableData.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.tableData.paginator = this.paginator;
  }

  checkTableActions() {
    if (this.tableActions) {
      this.tableColumns.push('edit');
    }
  }
}
