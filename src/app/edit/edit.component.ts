import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterOutlet,RouterLink],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  items: any = { id: 0, name: '', username: '', email: '', phone: '', companyName: '' };

  constructor(private Service: DataService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.Service.getDetails().subscribe((data: any) => {
      this.items = data;
      const itemId = +(this.route.snapshot.paramMap.get('id') ?? '0');
      const item: any = this.items.find((item: any) => item.id === itemId);
      if (item) {
        this.items = item;
        console.log('Task found:', item);
      } else {
        console.log(`Task with ID ${itemId} not found`);
      }
    });
  }

  updateDetails(): void {
    this.Service.updateUserDetails(this.items.id, {
      name: this.items.name,
      username: this.items.username,
      email: this.items.email,
      phone: this.items.phone,
      companyName: this.items.companyName
    })
      .subscribe((response) => {
        alert('User details updated successfully');
        console.log('User details updated successfully:', response);
        this.router.navigate(['view']);

      }, (error) => {
        console.error('Error updating user details:', error);
      });

  }
    

}
    

  


