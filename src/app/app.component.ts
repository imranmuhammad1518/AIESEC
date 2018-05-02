import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  getUrl:string;
  oppurtunityResponseData;
  listResponseData;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getUrl = 'http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/530?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c';
    this.http.get(this.getUrl).subscribe(oppurtunityResponseData => {
      this.oppurtunityResponseData  = oppurtunityResponseData;
    })

    this.http.get('http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/530?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c')
    .subscribe(listResponseData =>{
      this.listResponseData  = listResponseData;
    })
  }

}
