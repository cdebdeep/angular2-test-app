import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import {UserEntity} from './user-entity'

@Injectable()
export class UserService {

  constructor(private myHttp:Http) {

   }
   getUser():Observable<UserEntity[]>{
    return this.myHttp.get('usercollection.json')
    .map(response=>response.json().data as UserEntity[])
   }
}
