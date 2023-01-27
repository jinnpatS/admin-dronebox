import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/service/package.service';
import Swal from 'sweetalert2'
declare var $: any;


@Component({
  selector: 'app-package-update',
  templateUrl: './package-update.component.html',
  styleUrls: ['./package-update.component.css']
})
export class PackageUpdateComponent implements OnInit {
  list_package:any
  list_package_show:any
  base_page=10
  pages=10

  //pack
  package_id:any=0
  package_name:any=''
  package_date:any=''
  package_status=true
  package_desc:any=[]

  package_desc_status=false

  package_desc_id:any
  package_desc_package_id:any
  package_desc_description:any
  
  constructor(
    public packages:PackageService
  ) { }

  ngOnInit(): void {
    this.get_package_update()
  }
  clear_form(){
    this.package_name=''
    this.package_date=''
    this.package_status=true
    this.package_desc=[]
    this.package_desc_description=''
  }


  async get_package_update(){
    this.clear_form()

    this.list_package=[]
      this.packages.get_package_update({package_id:this.package_id}).then((e:any) => {
        if(e.length>0){
          this.list_package=e
          this.list_package_show=this.list_package.slice(0, this.base_page);

          console.log(this.list_package);
          
        }
      })
  }

  add_package_update_desc(){
    this.package_desc.push(this.package_desc_description)
    this.package_desc_description=''
    console.log(this.package_desc);
    
  }

  add_package_update(){
    let data = {
      name:this.package_name,
      date:this.package_date,
      update_status:this.package_status,
      pack_desc:this.package_desc,
    }
    console.log(data);
    
    this.packages.add_package_update(data).then((e:any) => {
      
      this.get_package_update()
      $("#add_package_modal").modal('hide');
      Swal.fire({
        icon: 'success', title: 'Success', showConfirmButton: false, timer: 1000
        })
    })
  }

  get_update_package_(item:any){
    console.log(item);
    
    this.package_id=item.packupdate_id
    this.package_name=item.name
    this.package_date=item.date
    this.package_status=item.update_status
    this.package_desc=item.pack_desc
  }

  delete_package_update_desc(i:any){
    this.package_desc.splice(i, 1);
  }

  edit_package_update(){
    let data = {
      packupdate_id:this.package_id,
      name:this.package_name,
      date:this.package_date,
      update_status:this.package_status,
      pack_desc:this.package_desc,
    }
    console.log(data);
    
    this.packages.update_package_update(data).then((e:any) => {
      
      this.get_package_update()
      $("#edit_package_modal").modal('hide');
      Swal.fire({
        icon: 'success', title: 'Success', showConfirmButton: false, timer: 1000
      })
    })
  }

  delete_package_update(item){
    let data = {
      packupdate_id:item.packupdate_id
    }
    console.log(data);
    
    Swal.fire({
      title: 'delete?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'confirm',
      cancelButtonText: 'cancel',
      // showDenyButton: true,
      // denyButtonText: 'measurement',

    }).then((result) => {
      if (result.isConfirmed) {
        this.packages.delete_package_update(data).then((e:any) => {
      
          this.get_package_update()
          Swal.fire({
            icon: 'success', title: 'Success', showConfirmButton: false, timer: 1000
          })
        })
      } else {
      }
    })
    
  }
  

  next_page(status:any,index:any){
    var total
    if(status=='next'){
      total = this.pages
      this.pages=total+index
      if(this.pages>this.list_package.length){
        this.pages=this.list_package.length
      }
      this.list_package_show=this.list_package.slice(total, this.pages);
    }else{
      if(this.pages==this.list_package.length){
        var mod = this.list_package.length%10
        this.pages = this.pages-mod        
      }else{
        this.pages = this.pages-index       
      }
      total=this.pages-index
      this.list_package_show=this.list_package.slice(total, this.pages);
    }
  }
}
