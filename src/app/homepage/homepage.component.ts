import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {ServiceService} from '../app/service.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  profile: any;
  username: string


  constructor(private serviceService: ServiceService, private httpClient: HttpClient)  { }

  submitName(){
    this.serviceService.updateProfile(this.username)


  }

  ngOnInit(){

    this.serviceService.getPersonsInfo().subscribe((data) =>{
      this.profile = data

      console.log(this.profile)

    })

    

  }

}
