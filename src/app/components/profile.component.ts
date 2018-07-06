import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{
	user:Object;
	repos:Object;
	username:string;	
		
	constructor(private _githubService : GithubService) {
		this.user = false;
	}
	
	ngOnInit() {
//		this.getUser();
//		this.getRepos();
	}
	
	getUser(): void {
		this._githubService.getUser().subscribe(user => {
			//console.log(user);
			this.user = user;
		    console.log(this.user);
		});
	}
	
	getRepos():void {
		this._githubService.getRepos().subscribe(repos => {
			this.repos = repos;
			console.log(this.repos);
		});
	}
	
	searchUser() {
		
		this._githubService.updateUser(this.username);
		this.getUser();
		this.getRepos();
	}
}
