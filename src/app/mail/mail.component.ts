import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  

  constructor(private fb: FormBuilder , private api :ApiService) { }

  ngOnInit(): void {
    
  }
 
  mailForm = this.fb.group({
    email: [''],
    published: true ,
    title: [''],
    description: [''],
  });

  sendMail(){
this.api.sendMail(this.mailForm.value).subscribe(res=>{
  console.log(res)
})
  }
}
