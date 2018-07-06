import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{
	user:Object;
	repos:Object;
	
	constructor(private _githubService : GithubService) {}
	
	ngOnInit() {
		this.getUser();
		this.getRepos();
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
}
