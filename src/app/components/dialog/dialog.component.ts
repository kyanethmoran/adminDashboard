import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

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
    private builder: FormBuilder // private service: StoreService
  ) {}

  inputData: any;
  closeMessage: string = 'canceled';

  ngOnInit(): void {
    this.inputData = this.data;
  }
  confirm(): void {
    if (this.inputData.formType == 'add') {
      this.addEntry();
    }
    if (this.inputData.formType == 'edit') {
      this.editEntry();
    }
  }

  addEntry(): void {
    this.dialogRef.close(this.dialogForm.value);
  }

  editEntry(): void {
    this.dialogRef.close(this.dialogForm.value);
  }

  dialogForm = this.builder.group({
    firstName: this.builder.control(this.data.firstName ?? ''),
    lastName: this.builder.control(this.data.lastName ?? ''),
    email: this.builder.control(this.data.email ?? ''),
    phone: this.builder.control(this.data.phone ?? ''),
    salary: this.builder.control(this.data.salary ?? ''),
    role: this.builder.control(this.data.role ?? ''),
    id: this.builder.control(this.data.id ?? ''),
  });
}
