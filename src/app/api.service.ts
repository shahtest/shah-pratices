import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from './appModels/task.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http : HttpClient
  ) { }
  meanCurdUrl ="http://localhost:3000/task"

  gitHubs ="https://api.github.com/users"

  User={"user" :"Shah@1234", "password ":"reliance@123"}

  isLoggingUser(){
    return false
   }


   getToken(){
    return localStorage.getItem('access_token');
   }

  //  signIn(User: any) {

  //   user['token'] = localStorage.getItem('access_token')

  //   return this.http.post<any>(`${this.endpoint}/signin`, user)

  //     .subscribe((res: any) => {

  //       localStorage.setItem('access_token', res.token)

  //      console.log(res)

       

  //     })

  // }


 
  getCurd():Observable<any>{
    let httpHeaders = new HttpHeaders({
      'content':'application/json',
      'Authorizataion':'7U3mHEp8yJtInLrn8bgKeIAjDMI'
    })
  
    // Header are immutable
     httpHeaders = httpHeaders.set('Welcome_to_infy','118');
    
    return this.http.get(this.meanCurdUrl ,{ headers:httpHeaders });
  };

  getCurdByid(id:any):Observable<any>{
    return this.http.get(`${this.meanCurdUrl}/${id}`)
  };


  postCurd(task:Tasks):Observable<any>{
    return this.http.post(this.meanCurdUrl , task)
  }
  deleteCurd(id:any):Observable<any>{
    return this.http.delete(`${this.meanCurdUrl}/${id}`)
  }

  updateCurd(id:any,task:Tasks){
    console.log(`${this.meanCurdUrl}/${id}` , task)
   return this.http.put(`${this.meanCurdUrl}/${id}`,task)
  }

  getDevData():Observable<any>{
   return this.http.get(this.gitHubs)
  }

 sendMail(data :any):Observable<any>{
 console.log(data)
   return this.http.post("http://localhost:5000/tutorials", data)
}

}
