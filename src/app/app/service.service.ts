import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {map} from 'rxjs/operators'
import {Observable} from 'rxjs'
import {User} from '../user'
import {Repos} from '../repos'
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  username: string;
  
  constructor(private httpClient: HttpClient) { 
    console.log('Service is now ready')
    this.username = 'Alice-Githui';

  }

  getPersonsInfo(){
      return this.httpClient.get(`https://api.github.com/users/${this.username}?access_token?client_id= ${environment.accessToken}`)
  }

  getPersonsRepos(){
    return this.httpClient.get(`https://api.github.com/users/Alice-Githui/repos?access_token?client_id= ${environment.accessToken}`)
  }

  updateProfile(username: string){
    this.username = username

  }

  

}
