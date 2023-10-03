import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../agent.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  // ngForm: any;
 
  constructor(private service :AgentService, private _fb:FormBuilder){}

  ngOnInit(): void {
   
  }

   ngForm :any= this._fb.group({
    name:['',Validators.required],
    username:['',Validators.required],
    password: ['',Validators.required],
    email: ['',Validators.required],
  });



  Register() {
    if (this.ngForm.valid) {
      let data = this.ngForm.value;
      this.service.register(data).subscribe((result: any) => {
        if (result) {
          alert("successfully");
          console.log("Sucessfully Added Account");
        } else {
          console.log("wrong creditial");
        }
      })
    }
    this.ngForm.reset();
  }
}
