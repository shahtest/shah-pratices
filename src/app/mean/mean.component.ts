import { Component, OnInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mean',
  templateUrl: './mean.component.html',
  styleUrls: ['./mean.component.scss']
})
export class MeanComponent implements OnInit {
  onEditMode :boolean =false;
  editIndex:number=0;

  taskData:Array<any> =[{
    "task_name": "meanApp",
    "name_person": "rahul shah",
    "Task_time": " 5",
    "Task_status": "pending"  
    
  }
  ,
  {
    "task_name": "PDF-generation",
    "name_person": "rahul shah",
    "Task_time": "1",
    "Task_status": "Complete"  
    
  },
  {
    "task_name": "excel-generation",
    "name_person": "rahul shah",
    "Task_time": "1",
    "Task_status": "Complete"  
    
  }
    
  ];

  constructor(private fb: FormBuilder) {

    console.log('constructor Call')
   }

  //  ngOnChanges(change :SimpleChange){
  //   console.log('ngOnChanges Call')
  //   console.log(change)
  //  }

  //  ngDoCheck(){
  //   console.log('ngDoCheck Call')
  //  }


  //  ngAfterContentInit(){
  //   console.log('ngAfterContentInit call')
  //  }


  //  ngAfterContentChecked(){
  //   console.log('ngAfterContentChecked call')
  //  }

  //  ngAfterViewInit(){
  //   console.log('ngAfterViewInit call')
  //  }

  //  ngAfterViewChecked(){
  //   console.log('ngAfterViewChecked')
  //  }


  //  ngOnDestroy(){
  //   console.log('ngOnDestroy')
  //  }
  tasksForm = this.fb.group({
    name_person: [''],
    task_name: [''],
    Task_time: [''],
    Task_status: [''],
  });

  ngOnInit()
  {}

  submit(){
    if(this.onEditMode){

this.taskData[this.editIndex] = this.tasksForm.value;
    }else{
      console.log(this.tasksForm.value)

      this.taskData.push(this.tasksForm.value)
    }
   
  }

  updateTasks(data :any , index : number){
    this.onEditMode =true;
     this.editIndex =index;
    this.tasksForm.setValue(data)

  }

  onDelete(index:number){
    this.taskData.splice(index , 1)
  }
}
