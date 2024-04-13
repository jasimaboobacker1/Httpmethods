import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { }

  getDetails(){
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(id: number){
    return this._http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  saveUserDetails(userDetails: any) {
    return this._http.post('https://jsonplaceholder.typicode.com/users', userDetails);
  }

  deleteUserDetails(id: number) {
    return this._http.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  updateUserDetails(id: number, newData: any) {
    return this._http.put(`https://jsonplaceholder.typicode.com/users/${id}`, newData);
  }
  


  
}
