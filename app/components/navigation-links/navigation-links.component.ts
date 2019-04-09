import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html',
  styleUrls: ['./navigation-links.component.scss']
})
export class NavigationLinksComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }
  goTo(path: string): void {
    this.router.navigate([path]);
  }
  
  ngOnInit() {
  }

}

