import { Component } from '@angular/core';
import { DummyApiService } from 'src/app/service/dummy-api.service';

@Component({
  selector: 'app-dummy-api',
  templateUrl: './dummy-api.component.html',
  styleUrls: ['./dummy-api.component.css']
})
export class DummyApiComponent {

  data:any;
  constructor(private service:DummyApiService){

  }
  getDta(){
    this.service.getData().subscribe((Response)=>{
      console.log(Response);
      this.data=Response;
    })
  }

}
