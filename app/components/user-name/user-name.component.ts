import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent implements OnInit {
  private userName: string;

  constructor(private user: UserService) { 
    this.user.getName().subscribe(res=>{
      var currentUser=localStorage.getItem("currentUser");
      if(currentUser){
        var user=JSON.parse(currentUser);
        console.log(user);
        console.log(currentUser);
      }
      if(res=="Guest"&&user){
        this.userName=user;
      }else{
        this.userName=res;
      }
  });
}
  ngOnInit() {
  }

}
