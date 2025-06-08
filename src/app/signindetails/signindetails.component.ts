import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../data.service';
// import { DetailsService } from '../details.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signindetails',
  providers: [DataService],
  standalone: true,
  imports: [RouterModule,FormsModule,HttpClientModule],
  templateUrl: './signindetails.component.html',
  styleUrl: './signindetails.component.scss'
})
export class SignindetailsComponent {
  constructor(
    private rout:Router,
    private http:HttpClient, 
    // private details:DetailsService
    ){}
  rec:any={}
submit(){
  this.rout.navigate(["/home"])
  // this.details.create(this.rec)
}
}
