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
  username: string;
  repositories: any


  constructor(private serviceService: ServiceService, private httpClient: HttpClient)  { }

  submitName(){
    this.serviceService.updateProfile(this.username)
    this.serviceService.getPersonsInfo().subscribe((data)=>{
      this.profile = data
    })

    this.serviceService.getPersonsRepos().subscribe((data) =>{
      this.repositories = data;

      console.log(this.repositories)
    })

  


  }

  ngOnInit(){

    this.serviceService.getPersonsInfo().subscribe((data) =>{
      this.profile = data

      console.log(this.profile)

    })

    this.serviceService.getPersonsRepos().subscribe((data) =>{
      this.repositories = data;

      console.log(this.repositories)
    })

    

  }

}
