import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  user: string = "http://localhost:3000/userdata"
  constructor(private obj: HttpClient, private rout: Router) { }
  create(data: any) {
    return this.obj.post(this.user, data,);
  }
  co: number = 0;
  check(data: any) {
    // this.rout.navigate(['/home']);
    this.obj.get<any[]>(this.user).subscribe((userdata) => {

      for (let users of userdata) {
    
        if (users.username === data.username && users.password === data.password) {
          this.co++;
        }

      }
      if (this.co != 0) {
        this.rout.navigate(['/home']);
      }
      else {
        alert('Incorrect')
      }
    })
   
  }
}
