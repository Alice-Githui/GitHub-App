import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {ServiceService} from '../app/service.service'


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  profile: any
  repositories: any
  username: string

  constructor(private serviceService: ServiceService, private httpClient: HttpClient) { }
  submitName(){
    this.serviceService.updateProfile(this.username);
    this.serviceService.getPersonsInfo().subscribe((data) =>{
      this.profile = data

      // console.log(this.profile)

    })
    this.serviceService.getPersonsRepos().subscribe((data) =>{
      this.repositories = data;

      console.log(this.repositories)
    })

  }

  ngOnInit(){
    this.serviceService.getPersonsInfo().subscribe((data) =>{
      this.profile = data

      // console.log(this.profile)

    })
    this.serviceService.getPersonsRepos().subscribe((data) =>{
      this.repositories = data;

      console.log(this.repositories)
    })
  }
}
