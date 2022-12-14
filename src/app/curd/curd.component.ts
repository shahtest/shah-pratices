import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Tasks } from '../appModels/task.model';

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.scss']
})
export class CurdComponent implements OnInit {



  onEditMode :boolean =false;

  editIndex:number=0;
  taskData : Array<any>=[];
  taskOption: Array<any> =["Pending" , "Work in progress" ,"Take Time", "Complete" ,"Review"]
  constructor(private fb: FormBuilder , private apiService : ApiService ,private route: ActivatedRoute,
    private router: Router  ) { }

  ngOnInit(): void {
this.getApi()
   
  }
  
  tasksForm = this.fb.group({
    task_person: ['',[Validators.required] ],
    task_name: ['',[Validators.required]],
    task_time: ['',[Validators.required]],
    task_status: ['',[Validators.required]],
  });

  submit(){
    if(this.onEditMode){
this.apiService.updateCurd( this.editIndex ,this.tasksForm.value).subscribe(res =>{
  console.log(res);
  this.onEditMode =false;
  this.getApi();
  this.tasksForm.reset();
})
          }else{
            this.apiService.postCurd(this.tasksForm.value).subscribe(res =>{
   console.log(res);
   this.getApi();
   this.tasksForm.reset();    
            })
          }

          
          
  }

  getApi(){
    this.apiService.getCurd().subscribe(res =>{
      this.taskData =res
    })
  }

  updateTasks(data :any ){
    this.tasksForm.patchValue(data)
     this.onEditMode = true;
     this.editIndex = data._id;
  };

  onDelete(index:Tasks){
   if(confirm('Do you want to delete this task')){
    this.apiService.deleteCurd(index).subscribe(res=>{
      console.log(res);
      this.getApi()
    })
   }
   
  }

  forSignle(data:any){
    const userid = data._id ;
    console.log(data._id)
    this.router.navigate(['/curd' , userid]);
  }

}
