import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  imports: [FormsModule,HttpClientModule],
  providers: [DataService,Router],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  constructor(private save: DataService,private rout:Router) { }
  rec: any = {}
  username:any=this.rec.username
  signin() {
  
  
    // Check if passwords match
    if (this.rec.password === this.rec.Re_enter_password) {
      // Check if username is valid (not undefined or empty)
      if (!this.rec.username || this.rec.username.trim() === '') {
        alert('Username is required');
        return;  // Don't proceed with navigation if username is invalid
      }
  
      // Proceed with navigation if username and passwords are valid
      this.rout.navigate(['/verify', this.rec.username]);
    } else {
      // If passwords do not match, show an alert
      alert("Password does not match");
    }
  }
  
  }

// this.rout.navigate(['verify'])
// this.save.create(this.rec).subscribe();