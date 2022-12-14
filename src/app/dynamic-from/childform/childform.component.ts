import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-childform',
  templateUrl: './childform.component.html',
  styleUrls: ['./childform.component.scss']
})
export class ChildformComponent implements OnInit {

  constructor() { }

  @ViewChild('f') form: any;
  ngOnInit(): void {
  }

  onSubmit(){
   console.log(this.form.value) 
  }

formArray:any =[{'formcontrolName':'name', 'fromtype':'text' , 'lable':'FirstName'},
{'formcontrolName':'lname', 'fromtype':'text'  ,'lable':'LastName'},
{'formcontrolName':'phone', 'fromtype':'text' ,'lable':'Phone' },
{'formcontrolName':'email', 'fromtype':'text','lable':'Email'},
{'formcontrolName':'address', 'fromtype':'text' ,'lable':'Address'},
{'formcontrolName':'id', 'fromtype':'text','lable':'EmployeeId' },
{ 'fromtype':'submit' ,'lable':'EmployeeId' }]


afterViewInIt(){

}
}
