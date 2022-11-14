import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/service/package.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  list_package:any
  constructor(
    public packages : PackageService,
  ) { 
    
  }

  ngOnInit(): void {
    this.get_package()
  }

  get_package(){
    this.packages.get_package().then((e:any) => {
      this.list_package=e
      console.log(this.list_package);
      
      
    })
  }
}
