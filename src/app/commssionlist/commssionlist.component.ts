import {Component, OnInit, TemplateRef} from '@angular/core';
import {Commonservices} from "../app.commonservices";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-commssionlist',
  templateUrl: './commssionlist.component.html',
  styleUrls: ['./commssionlist.component.css'],
  providers: [Commonservices]
})
export class CommssionlistComponent implements OnInit {

  modalRef: BsModalRef;
  public serverurl;
  public username;
  public isadmin;
  public commisionlist;
  public commisiondetlist;
  public searchText;
  public searchType;
  public searchDate;

  constructor(private _commonservices: Commonservices, userdata: CookieService, private router: Router,private _http: Http,private modalService: BsModalService) {
    this.serverurl=_commonservices.url;
    this.username = '';
    this.searchType = '';

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
      this.getCommisionList();
    }
  }

  ngOnInit() {
  }

  getCommisionList(){
    this.commisiondetlist = [];
    var link =this.serverurl+'commisionlist';
    var data = {isadmin:this.isadmin,username:this.username};

    this._http.post(link, data)
        .subscribe(res => {
          var result = res.json();
          this.commisionlist = result.item;
        },error => {
          console.log("Oooops!");
        });
  }

  openViewModal(template: TemplateRef<any>,item) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    var link =this.serverurl+'commisiondetlist';
    var data = {username:item._id};

    this._http.post(link, data)
        .subscribe(res => {
          var result = res.json();
          console.log(result);
          this.commisiondetlist = result.item;
        },error => {
          console.log("Oooops!");
        });
  }

}
