import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

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

  constructor() {}

  ngOnInit() {
    this.checkTableActions();
  }

  checkTableActions() {
    if (this.tableActions) {
      this.tableColumns.push('edit');
      this.tableColumns.push('delete');
    }
  }
}
