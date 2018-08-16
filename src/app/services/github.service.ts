import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
	headers : new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GithubService {
	
	private username : string;
	private client_id = '....'; // client id after register this app here - https://github.com/settings/applications/new
	private client_secret = '....'; // client_secret after register this app here - https://github.com/settings/applications/new
	
	constructor(private _http:HttpClient) {
		console.log('Github Service Ready... ');
		this.username = 'bradtraversy';
	}
	
	getUser() : Observable<any> {
		return this._http.get<any>('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret);
		//.map(res => res.json());
	}
	
	getRepos() {
		return this._http.get<any>('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret);
	}
	
	updateUser(username:string) {
		this.username = username;
	}
} 