import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{
	
	constructor(private _githubService : GithubService) {}
	
	ngOnInit() {
		this.getUser();
	}
	
	getUser(): void {
		this._githubService.getUser().subscribe(user => {
			console.log(user); 
		});
	}
}
