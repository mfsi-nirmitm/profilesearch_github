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
	
	constructor(private _http:HttpClient) {
		console.log('Github Service Ready... ');
		this.username = 'bradtraversy';
	}
	
	getUser() : Observable<any> {
		return this._http.get<any>('http://api.github.com/users/'+this.username);
		//.map(res => res.json());
	}
	
	getRepos() {
		return this._http.get<any>('http://api.github.com/users/'+this.username+'/repos');
	}
	
	updateUser(username:string) {
		this.username = username;
	}
} 