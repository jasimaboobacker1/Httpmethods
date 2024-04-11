import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formSubmitted = false;
  form!: FormGroup;
  submissionStatus: string = '';
  submissionResponse: any;
  Submittedshow=false

  constructor(private _fb: FormBuilder,private dataService:DataService) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      companyname: ['', Validators.required], 
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.form.valid) {
      const formValue = this.form.value;
      this.submissionStatus = 'Submitting';
      this.dataService.saveUserDetails(formValue).subscribe(
        (res) => {
          this.submissionStatus = 'Success';
          this.submissionResponse = res;
          this.Submittedshow=true
        },
        (error) => {
          this.submissionStatus = 'Error';
          this.submissionResponse = error;
          this.Submittedshow=true
        }
      );
    } else {
      this.form.markAllAsTouched();
    }
  }
  
}
