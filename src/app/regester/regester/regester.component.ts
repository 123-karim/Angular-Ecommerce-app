import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.scss']
})
export class RegesterComponent implements OnInit {
  form!:FormGroup;
  constructor(private formbulder:FormBuilder,private http:HttpClient,private route:Router){

  }
  ngOnInit(): void {
    this.form=this.formbulder.group({firstName:"",lastName:"",userName:"",email:"",password:""});
  }
  submit(){
    console.log(this.form.getRawValue());
this.http.post("https://localhost:7094/api/Auth/register",this.form.getRawValue()).subscribe(()=>{this.route.navigate(["/login"])})
  }

}
