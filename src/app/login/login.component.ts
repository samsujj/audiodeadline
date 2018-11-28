import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';
import {Http} from "@angular/http";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {Commonservices} from "../app.commonservices";
declare var $ : any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    providers: [Commonservices]
})

export class LoginComponent implements OnInit {
    public loginform: FormGroup;
    private fb;
    private userdata: CookieService;
    private userdetails;
    items:any;
    commonservices:Commonservices;
    public is_error;
    public serverurl;

  constructor(fb: FormBuilder,private _http: Http,private router: Router, userdata: CookieService, private _commonservices: Commonservices) {
      this.fb = fb;
      this.userdata = userdata;
      this.commonservices=_commonservices;
      this.items = _commonservices.getItems();
      this.serverurl=_commonservices.url;
  }

    ngOnInit() {
        this.loginform = this.fb.group({
            email: ["", LoginComponent.validateEmail],
            password: ["", Validators.required],
        });

    }

    static validateEmail(control: FormControl){
        if(control.value==''){
            return { 'invalidemail': true };
        }
        if ( !control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return { 'invalidemail': true };
        }
    }


    dosubmit(formval) {
        let x: any;
        this.is_error = 0;
        for (x in this.loginform.controls) {
            console.log(this.loginform.controls[x]);
            this.loginform.controls[x].markAsTouched();
        }
        console.log(this.loginform.valid);
        var link = this.serverurl+'userlogin';

        // var link = 'http://localhost:3007/userlogin';
        if (this.loginform.valid) {
            var data = {
                email: formval.email,
                password: formval.password,
            };

            console.log(data);
            this._http.post(link, data)
                .subscribe(res => {
                    var result = res.json();
                    console.log(result.msg);
                    if(result.status=='success'){
                        this.userdata.set('userdetails', JSON.stringify(result.msg));
                        this.router.navigateByUrl('/dashboard');
                    }
                    else {
                        this.is_error=result.msg;
                        console.log(this.is_error);
                        this.router.navigate(['/login']);
                    }
                }, error => {
                    console.log("Oooops!");

                    this.router.navigate(['/login']);
                });
        }
    }
}
