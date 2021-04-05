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
  // clientid = 'c58b916827f6f10d47e5';
  // clientsecret = '52f5b7721f8c5bd7db47fb70c039162614bb04d3'

  
  constructor(private httpClient: HttpClient) { 
    console.log('Service is now ready')
    this.username = 'Alice-Githui';

  }

  getPersonsInfo(){
      return this.httpClient.get(`https://api.github.com/users/${this.username}?access_token?client_id= ${environment.accessToken}`)
      }
  

}
