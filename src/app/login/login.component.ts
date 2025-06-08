import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule,HttpClientModule],
  standalone:true,
  providers:[Router,DataService,HttpClient],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
constructor(private router:Router,private checking:DataService, private http:HttpClient){}
rec:any={}
login(){
  this.checking.check(this.rec) ;
}
}
