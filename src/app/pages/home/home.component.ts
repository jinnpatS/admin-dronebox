import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard.service';
// import { EChartsOption } from 'echarts';


declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //parameter
  count_customer:any={}
  count_package:any={}
  count_task:any={}
  sum_usage:any={}
  sales_overview:any={}
  task_process_time_detail={
    sum_count:0,
    sum_process:0,
    sum_process_avg:0
  }
  task_process_time:any={}
  task_process_date:any={}
  task_process_date_detail={
    sum_count:0,
    sum_process:0,
    sum_process_avg:0
  }
  //chart
  chart_sales_overview:any
  chart_task_process_time:any
  chart_task_process_date:any
  //filter
  sales_overview_in_month=''
  task_process_date_in_date
  task_process_time_in_date=''
  constructor(
    public dashboard:DashboardService
  ) { }
  isNumber(value) {
    return Number.isNaN(value);
  }
  ngOnInit(): void {
    this.get_customer()
    this.get_package()
    this.get_task()
    this.get_usage()
    this.get_sales_overview()
    this.get_task_process_time()
  }

  get_customer(){
    this.dashboard.get_count_customer().then(e=>{
      // console.log(e);
      this.count_customer=e[0]
      this.count_customer.count_customer_free=this.count_customer.count_customer-this.count_customer.count_customer_buy_package
      console.log(this.count_customer);
      
    })
  }

  get_package(){
    this.dashboard.get_count_package().then(e=>{
      // console.log(e);
      this.count_package=e[0]
      var sml = this.count_package.count_project_by_package_s+this.count_package.count_project_by_package_m+this.count_package.count_project_by_package_l+this.count_package.count_project_by_package_pro
      this.count_package.count_project_free=this.count_package.count_project-sml
      console.log(this.count_package);
      
    })
  }

  get_task(){
    this.dashboard.get_count_task().then(e=>{
      // console.log(e);
      this.count_task=e[0]
      console.log(this.count_task);
      
    })
  }

  get_usage(){
    this.dashboard.get_sum_usage().then(e=>{
      // console.log(e);
      this.sum_usage=e[0]
      console.log(this.sum_usage);
      
    })
  }

  get_sales_overview(){
    this.dashboard.get_sales_overview({search_date:this.sales_overview_in_month}).then(e=>{
      // console.log(e);
      this.sales_overview=e
      console.log(this.sales_overview);
      var data_x=[],data_y=[],data_z=[],sum_all=0,sum_month=0,sum_week=0
      this.sales_overview.forEach(e => {
        data_x.push(e.size_item)
        data_y.push(Number(e.count))
        data_z.push(Number(e.sum_month))
        sum_all=sum_all+Number(e.sum_all)
        sum_month=sum_all+Number(e.sum_month)
        sum_week=sum_all+Number(e.sum_week)
      });
      this.sales_overview.sum_all=sum_all
      this.sales_overview.sum_month=sum_month
      this.sales_overview.sum_week=sum_week
      console.log(data_x,data_y,data_z);
      
      this.chart_sales_overview = {
        xAxis: {
          type: 'category',
          data: data_x
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          }
        },
        series: [
          {
            data: data_y,
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' package';
              }
            },
          }
        ]
      };
      
      
    console.log(this.chart_sales_overview);
    
    })
  }

  get_task_process_date(){
    this.dashboard.get_task_process_date({search_date:this.task_process_time_in_date}).then(e=>{
      console.log(e);
      this.task_process_date=e
      console.log(this.sales_overview);
      var data_x=[],data_y=[],data_z=[],sum_count=0,sum_process=0,sum_week=0
      this.task_process_date.forEach(e => {
        data_x.push(e.times)
        data_y.push(Number(e.count_process))
        sum_count=Number(e.count_process)+sum_count
        sum_process=Number(e.sum_usage)+sum_process
      });
      this.task_process_date_detail.sum_count=sum_count
      this.task_process_date_detail.sum_process=sum_process
      this.task_process_date_detail.sum_process_avg=sum_process/sum_count
      console.log(this.task_process_date_detail);
      
      this.chart_task_process_time = {
        xAxis: {
          type: 'category',
          data: data_x
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          }
        },
        series: [
          {
            data: data_y,
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' task';
              }
            },
          }
        ]
      };
      
    })
  }

  get_task_process_time(){
    this.dashboard.get_task_process_time({search_date:this.task_process_time_in_date}).then(e=>{
      console.log(e);
      this.task_process_time=e
      console.log(this.sales_overview);
      var data_x=[],data_y=[],data_z=[],sum_count=0,sum_process=0,sum_week=0
      this.task_process_time.forEach(e => {
        data_x.push(e.times)
        data_y.push(Number(e.count_process))
        sum_count=Number(e.count_process)+sum_count
        sum_process=Number(e.sum_usage)+sum_process
      });
      this.task_process_time_detail.sum_count=sum_count
      this.task_process_time_detail.sum_process=sum_process
      this.task_process_time_detail.sum_process_avg=sum_process/sum_count
      console.log(this.task_process_time_detail);
      
      this.chart_task_process_time = {
        xAxis: {
          type: 'category',
          data: data_x
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          }
        },
        series: [
          {
            data: data_y,
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' task';
              }
            },
          }
        ]
      };
      
    })
  }
  
}