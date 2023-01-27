import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
    var user_data = localStorage.getItem('user_data')

    if(user_data === null){
      this.router.navigateByUrl('')
    } 
  }

  logout(){
    localStorage.clear()
    sessionStorage.clear()
    this.router.navigate([''])
  }

}
