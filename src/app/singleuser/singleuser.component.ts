import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.scss']
})
export class SingleuserComponent implements OnInit {
  userId:any;
  constructor(private route: ActivatedRoute ,private apiService : ApiService ) { }

  ngOnInit(){

    // this.route.paramMap.subscribe(params => {
    //   this.userId = params.get("id")
    // })

    const id = this.route.snapshot.params['id'];

    console.log('yes=>' +id)

    this.apiService.getCurdByid(id).subscribe(res =>{
      this.userId =res ;
      console.log(this.userId)
    })
  }

}
