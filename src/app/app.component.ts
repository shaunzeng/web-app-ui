import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Angular App';
  endPoint = 'http://localhost:8080/graphql';

  data:any;

  constructor(private http: HttpClient) {}

  ngOnInit():void {
  	this.http.post(this.endPoint, 'query { getAllUsers }', {
			    headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*'),
			  })
  			 .subscribe(
  			 	(data) => {console.log(data)},
  			 	(err:HttpErrorResponse) => {
  			 		console.log(err);
  			 	})
  }
}
