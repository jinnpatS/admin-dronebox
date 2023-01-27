import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username
  password
  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  login(){
    if(this.username && this.password){
      if(this.username=='admin' && this.password=='@min'){
        localStorage.setItem('username', this.username)

        this.router.navigateByUrl('home')

      }else{
        Swal.fire(
          'username & password was wrong',
          'error'
        )
      }
    }else{
      Swal.fire(
        'please check username & password',
        'error'
      )
    }
  }
}
