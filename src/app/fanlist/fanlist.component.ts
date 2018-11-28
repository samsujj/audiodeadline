import {Component, OnInit, TemplateRef} from '@angular/core';
import {Commonservices} from '../app.commonservices';
import {Http} from '@angular/http';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-fanlist',
  templateUrl: './fanlist.component.html',
  styleUrls: ['./fanlist.component.css'],
    providers: [Commonservices]
})
export class FanlistComponent implements OnInit {

    modalRef: BsModalRef;
    public serverurl;
    public userlist;
    public idx;
    public searchText;
    public username;
    public isadmin;

    constructor(private _commonservices: Commonservices,private _http: Http,private modalService: BsModalService, userdata: CookieService, private router: Router) {
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
            this.getUserList();
        }
    }

    ngOnInit() {
    }

    getUserList(){
        var link =this.serverurl+'fanlist';
        var data = {username:this.username};

        this._http.post(link, data)
            .subscribe(res => {
                var result = res.json();
                this.userlist = result.res;
            },error => {
                console.log("Oooops!");
            });
    }

    cngstatus(item){
        var status = 1;
        if(typeof (item.status) != 'undefined')
            status = 1-parseInt(item.status);
        var link =this.serverurl+'cngstatus';
        var data = {_id:item._id,status : status};

        this._http.post(link, data)
            .subscribe(res => {
                item.status = status;
            },error => {
                console.log("Oooops!");
            });
    }

    openDelModal(template: TemplateRef<any>,item) {
        this.idx = this.userlist.indexOf(item);
        this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    }

    confirm(): void {
        var link =this.serverurl+'deleteuser';
        var data = {_id:this.userlist[this.idx]._id};

        this._http.post(link, data)
            .subscribe(res => {
                var result = res.json();
                if(result.status == 'success'){
                    this.userlist.splice(this.idx, 1);
                }
                this.modalRef.hide();
            },error => {
                console.log("Oooops!");
                this.modalRef.hide();
            });
    }

    decline(): void {
        this.modalRef.hide();
    }

}
