import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-verify',
  providers: [Router,DataService],
  imports: [FormsModule,HttpClientModule],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.scss'
})
export class VerifyComponent {
  constructor(private rout: Router, private activatedRoute: ActivatedRoute, private way: DataService) { }
  otp: any = '';
  a:any;
  generated_otp: number = Math.floor(Math.random() * 1000000);
  ngOnInit(): void {
  const id = this.activatedRoute.snapshot.paramMap.get('username');
  this.a=id;
}
verify(){
  // if (this.otp == this.generated_otp) {
    alert("account created");
    this.rout.navigate(["/details"])
  // }
}
}
