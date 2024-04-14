import { Component } from '@angular/core';
import { DataService } from '../Services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  
})

export class ViewComponent  {

  userDetails: any;
  showTable: boolean = false;
  showIdTable:boolean=false;
  userId: number=0;
  public newName: string = '';
  public selectedUser: any = {};

  constructor(private dataService: DataService,private router:Router) { }

  

  showTableData(): void {
    this.dataService.getDetails().subscribe(
      (data: any) => {
        this.userDetails = data;
        this.showTable = true;
        this.showIdTable = false;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  
  showTableDataofId(): void {
    this.dataService.getUserById(this.userId).subscribe(
      (data: any) => {
        this.userDetails = [data]; 
        this.showTable = false;
        this.showIdTable = true;
      },
      (error: any) => {
        console.error('Error', error);
      }
    );
  }

  Delete(id:number){
      this.dataService.deleteUserDetails(id).subscribe(
        (res:any)=>{
          alert(`Deleted details of user with ID ${id}`);
        },
        (error:any)=>{
          console.error('Error', error);  
        }
      )
  }

  Update(item:any){
    this.router.navigate(['edit/',item.id])
  }

  UpdateName(user:any){
    this.router.navigate(['patch/',user.id])
  }

  
}
