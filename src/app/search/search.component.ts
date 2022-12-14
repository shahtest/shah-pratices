import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private apiService : ApiService) { };

  githubsUser:Array<any>=[];
  modelViewData:boolean =false;

  searchdata:string=''

  singleDev:any;

  ngOnInit() {
    this.apiService.getDevData().subscribe(res =>{
this.githubsUser =res;

    }
    )
  }

  hideModelbox():void{
    this.modelViewData = false;

    console.log('shah')
  }

  viewUser(data:any){
    console.log(data);
    this.singleDev = data;
    this.modelViewData = true;

  }


}
