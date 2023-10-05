import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StoreService } from 'src/app/services/store.service';

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
  @Output() deleteRow: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateTable: EventEmitter<any> = new EventEmitter<any>();

  dataSource: any;

  constructor(public dialog: MatDialog, private service: StoreService) {}

  ngOnInit() {
    this.checkTableActions();
    this.tableData = new MatTableDataSource<any>(this.tableData);
  }

  checkTableActions() {
    if (this.tableActions) {
      this.tableColumns.push('edit');
    }
  }

  delete(id: string) {
    this.deleteRow.emit(id);
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    let _dialog = this.dialog.open(DialogComponent, {
      width: '50vw',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: true,
      data: {
        title: 'Add New Entry',
      },
    });

    _dialog.afterClosed().subscribe((result) => {
      this.saveEntry(result);
      this.updateTable.emit();
    });
  }

  saveEntry(newEmployee: any) {
    this.service
      .saveStoreEmployeeInfo('Georgia', newEmployee)
      .subscribe((res: any) => {
        console.log('added');
      });
  }
}
