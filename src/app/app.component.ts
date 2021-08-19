import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component } from '@angular/core';  
import {GetApiService } from './get-api.service';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  countrydetails:any;
  errormessage:any;
  title = 'sample-app';
  constructor (private api:GetApiService)
  {

  }
  search()
  {
    console.log("test") 
    var reqData=(<HTMLInputElement>document.getElementById("searchcountry")).value
    // $("#searchcountry").val();
    console.log(reqData)
    // document.getElementById("searchcountry").value 
    console.log(this.countrydetails)
    this.api.apicall(reqData).subscribe((data:any)=>{
      console.log(data)
      
        this.countrydetails=data.country;
      

      // this.title = data['title'];
    })
  }

}
