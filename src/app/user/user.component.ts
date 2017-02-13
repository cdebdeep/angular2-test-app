import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable'
import {UserEntity} from '../user-entity';
import {UserService} from '../user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private UserCollection:Array<UserEntity>;
  private successMsg='';
  private errorMsg='';
  constructor(private userService :UserService) { 
    this.UserCollection=[];
  }

  ngOnInit() {
    this.getUser();
  }
  getUser(){
    this.userService.getUser()
    .subscribe((response:UserEntity[])=>{
      this.UserCollection=response
      console.log(response)
    },
    err=>{
      this.errorMsg=err;
    },
    ()=>{
      this.successMsg="Record get complete";
    }
    )    
  }

}
