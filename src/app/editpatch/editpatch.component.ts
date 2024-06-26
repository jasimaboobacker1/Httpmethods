import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editpatch',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterOutlet],
  templateUrl: './editpatch.component.html',
  styleUrl: './editpatch.component.css'
})
export class EditpatchComponent implements OnInit{
  users:any;

  constructor(private Service: DataService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const userId = +(this.route.snapshot.paramMap.get('id') ?? '0');
    this.Service.getUserById(userId).subscribe(
      (data: any) => {
        this.users = data;
        console.log(this.users);
        
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  Updatename(){
    this.Service.updateUserName(this.users.id,{
      name: this.users.name,
    })
    .subscribe((response) => {
      alert('User details updated successfully. New name: ' + this.users.name);
      console.log('User Name updated successfully:', response);
      this.router.navigate(['view']);

    }, (error) => {
      console.error('Error updating user details:', error);
    });


  }


}
