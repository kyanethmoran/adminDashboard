import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { MatPaginator } from '@angular/material/paginator';
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
  @Output('updateTable') updateTable = new EventEmitter<any>();

  private paginator!: MatPaginator;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    if (mp) {
      this.paginator = mp;
      this.dataSource = new MatTableDataSource<any>(this.tableData);
      this.dataSource.paginator = this.paginator;
      this.cdr.detectChanges();
    }
  }

  dataSource: any;

  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.checkTableActions();
    this.tableData = new MatTableDataSource<any>(this.tableData);
    this.cdr.detectChanges();
  }

  ngAfterViewInit() {
    this.tableData.paginator = this.paginator;
  }

  checkTableActions() {
    if (this.tableActions) {
      this.tableColumns.push('edit');
    }
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
      if (result !== 'canceled') {
        this.updateTable.emit();
        this.cdr.detectChanges();
        this.tableData.paginator = this.paginator;
      }
    });
  }
}
