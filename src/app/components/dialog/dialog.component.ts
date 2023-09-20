import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  Form,
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
})
export class DialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogComponent>,
    private builder: FormBuilder,
    private service: StoreService
  ) {}

  inputData: any;
  closeMessage: string = 'canceled';

  ngOnInit(): void {
    this.inputData = this.data;
  }

  addEntry(): void {
    this.dialogRef.close('closed using close button: this is data passed');
  }

  dialogForm = this.builder.group({
    firstName: this.builder.control(''),
    lastName: this.builder.control(''),
    email: this.builder.control(''),
    phone: this.builder.control(''),
    salary: this.builder.control(''),
    role: this.builder.control(''),
  });

  saveEntry() {
    this.service
      .saveStoreEmployeeInfo('Georgia', this.dialogForm.value)
      .subscribe((res: any) => {
        this.addEntry();
        console.log('added');
      });
  }
}
