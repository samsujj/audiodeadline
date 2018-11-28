import { Component, OnInit } from '@angular/core';
import {Commonservices} from "../app.commonservices";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {Http} from "@angular/http";

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css'],
  providers: [Commonservices]
})
export class OrderlistComponent implements OnInit {

  public serverurl;
  public username;
  public isadmin;
  public orderlist;
  public searchDate;
  public searchText;

  constructor(private _commonservices: Commonservices, userdata: CookieService, private router: Router,private _http: Http) {
    this.serverurl=_commonservices.url;
    this.username = '';

    let userdata2: any;
    userdata2= userdata.get('userdetails');

    if (typeof (userdata2) == 'undefined' || userdata2 == ''){
      this.router.navigateByUrl('/login');
    }else{
      userdata2 =JSON.parse(userdata2);
      this.isadmin = userdata2.admin;
      if(this.isadmin == 0){
        this.username = userdata2.username;
      }
      this.getOrderList();
    }
  }

  ngOnInit() {
  }


  getOrderList(){
    var link =this.serverurl+'orderlist';
    var data = {isadmin:this.isadmin,username:this.username};

    this._http.post(link, data)
        .subscribe(res => {
          var result = res.json();
          this.orderlist = result.item;
        },error => {
          console.log("Oooops!");
        });
  }


  showtwoDecnum(fnum){
    fnum = parseFloat(fnum);
    return fnum.toFixed(2);
  }

}
