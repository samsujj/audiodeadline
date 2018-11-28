import { Component, OnInit } from '@angular/core';
import {Commonservices} from "../app.commonservices";
import {Http} from "@angular/http";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  providers: [Commonservices]
})
export class BlogsComponent implements OnInit {

  public serverurl;
  public siteurl;
  public bloglist;


  constructor(private _commonservices: Commonservices,private _http: Http) {
    this.serverurl=_commonservices.url;
    this.siteurl=_commonservices.siteurl;
    this.getBlogList();
  }

  ngOnInit() {
  }

  getBlogList(){
    var link =this.serverurl+'frontbloglist';
    var data = {};

    this._http.post(link, data)
        .subscribe(res => {
          var result = res.json();
          this.bloglist = result.res;
        },error => {
          console.log("Oooops!");
        });
  }


  getimages(item){
    var images = item.images;
    return images[0];
  }

}
