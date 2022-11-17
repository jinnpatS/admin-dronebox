import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/service/package.service';
import Swal from 'sweetalert2'

declare var $: any;

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  list_package:any
  //pack
  package_id:any=0
  package_name:any=''
  package_name_en:any=''
  package_size:any=''
  package_price:number=0
  package_pic:number=0
  package_status=false


  //pack desc
  list_package_desc:any
  package_desc_status=false
  package_desc_id:any=0
  package_desc_package_id:any=0
  package_desc_description:any=''

  constructor(
    public packages : PackageService,
  ) { 
    
  }

  ngOnInit(): void {
    this.get_package()
  }
  //package
  get_package(){
    this.list_package=[]
    this.packages.get_package().then((e:any) => {
      this.list_package=e
      console.log(this.list_package);
      
      
    })
  }

  add_package(){
    let data = {
      name_item:this.package_name,
      name_item_en:this.package_name_en,
      size_item:this.package_size,
      item_price:this.package_price,
      num_pic:this.package_pic,
    }
    console.log(data);

    this.packages.add_package(data).then((e:any) => {
      this.get_package()
      Swal.fire({
        icon: 'success', title: 'Success', showConfirmButton: false, timer: 1000
      })
      $("#add_package_modal").modal('hide');
    })
  }

  edit_package(item:any){
    this.package_id=item.item_id
    this.package_name=item.name_item
    this.package_name_en=item.name_item_en
    this.package_size=item.size_item
    this.package_price=item.item_price
    this.package_pic=item.num_pic
  }

  save_edit_package(){
    let data = {
      id:this.package_id,
      name_item:this.package_name,
      name_item_en:this.package_name_en,
      size_item:this.package_size,
      item_price:this.package_price,
      num_pic:this.package_pic,
    }
    console.log(data);
    
    this.packages.update_package(data).then((e:any) => {
      this.get_package()
      Swal.fire({
        icon: 'success', title: 'Success', showConfirmButton: false, timer: 1000
      })
      $("#edit_package_modal").modal('hide');
    })
  }

  delete_package(item){
    let data = {
      item_id:item.item_id
    }
    console.log(data);
    Swal.fire({
      title: 'Delete ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      // showDenyButton: true,
      // denyButtonText: 'measurement',

    }).then((result) => {
      if (result.isConfirmed) {
        this.packages.delete_package(data).then((e:any) => {
          this.get_package()
          Swal.fire({
            icon: 'success', title: 'Success', showConfirmButton: false, timer: 1000
          })
          $("#edit_package_modal").modal('hide');
        })
      }
    })
    
  }

  clear_package_data(){
    this.package_id=0
    this.package_name=''
    this.package_name_en=''
    this.package_size=''
    this.package_price=0
    this.package_pic=0
  }

  //package_desc
  get_package_desc(item:any){
    this.package_id=item.item_id
    let data = {
      package_id:item.item_id
    }
    this.list_package_desc=[]
    this.packages.get_package_desc(data).then((e:any) => {
      if(e.length>0){
        this.list_package_desc=e
        this.list_package_desc.forEach(element => {
          element.edit_package_desc=false
        });
      }

    })
  }

  add_package_desc(){
    let data = {
      package_id:this.package_id,
      package_desc:this.package_desc_description
    }
    this.packages.add_package_desc(data).then((e:any) => {
      this.list_package_desc=[]
      this.packages.get_package_desc({package_id:this.package_id}).then((e:any) => {
        if(e.length>0){
          this.list_package_desc=e
          this.list_package_desc.forEach(element => {
            element.edit_package_desc=false
          });
        }
        Swal.fire({
        icon: 'success', title: 'Success', showConfirmButton: false, timer: 1000
        })
      })
    })
  }

  get_update_package_desc(item:any){
    this.package_desc_id=item.id
    this.package_desc_package_id=item.item_id
    this.package_desc_description=item.package_desc
  }

  update_package_desc(){
    let data = {
      id:this.package_desc_id,
      item_id:this.package_id,
      package_desc:this.package_desc_description
    }
    this.packages.update_package_desc(data).then((e:any) => {
      this.list_package_desc=[]
      this.packages.get_package_desc({package_id:this.package_id}).then((e:any) => {
        if(e.length>0){
          this.list_package_desc=e
          this.list_package_desc.forEach(element => {
            element.edit_package_desc=false
          });
        }
        Swal.fire({
        icon: 'success', title: 'Success', showConfirmButton: false, timer: 1000
        })
      })
    })
  }

  delete_package_desc(item:any){
    let data = {
      id:item.id,
      item_id:item.item_id,
    }
    Swal.fire({
      title: 'Delete ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      // showDenyButton: true,
      // denyButtonText: 'measurement',

    }).then((result) => {
      if (result.isConfirmed) {
        this.packages.delete_package_desc(data).then((e:any) => {
          this.list_package_desc=[]
          this.packages.get_package_desc({package_id:this.package_id}).then((e:any) => {
            if(e.length>0){
              this.list_package_desc=e
              this.list_package_desc.forEach(element => {
                element.edit_package_desc=false
              });
            }
            Swal.fire({
            icon: 'success', title: 'Success', showConfirmButton: false, timer: 1000
            })
          })
        })
      }
    })
    
  }
}
