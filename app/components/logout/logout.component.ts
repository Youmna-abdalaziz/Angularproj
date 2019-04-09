import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private user: UserService) { }
  logout() {
    var answer= confirm ('Are you sure you want to Logout?');
    if(answer){
    localStorage.removeItem('currentUser');
    this.user.setName('Guest');
    this.router.navigate(['/login']);
  }else{
    this.router.navigate(['home']);
  }
}
  ngOnInit() {
  }

}
