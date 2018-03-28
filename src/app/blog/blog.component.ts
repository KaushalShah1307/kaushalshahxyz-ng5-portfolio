import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  private apiURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fviewshare%2F';
  data: any = [];

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.getPosts();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiURL)
    .map((res: Response) => res.json())
  }

  getPosts() {
    this.getData().subscribe(data => {
      this.data = data.items;
    })
  }

}
