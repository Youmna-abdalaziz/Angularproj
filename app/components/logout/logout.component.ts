import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,private user: UserService) { }
  logout(){
    localStorage.removeItem('currentUser');
    this.user.setName('Guest');
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
