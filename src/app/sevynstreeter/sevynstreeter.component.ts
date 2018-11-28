import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';
import {Http} from "@angular/http";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Commonservices} from "../app.commonservices";

@Component({
  selector: 'app-sevynstreeter',
  templateUrl: './sevynstreeter.component.html',
  styleUrls: ['./sevynstreeter.component.css'],
  providers: [Commonservices]
})
export class SevynstreeterComponent implements OnInit {
  public sevynstreeterform: FormGroup;
  private fb;
  items:any;
  commonservices:Commonservices;
  public serverurl;
  constructor(fb: FormBuilder, private _http: Http, private router: Router, private _commonservices: Commonservices) {
    this.fb = fb;
    this.commonservices=_commonservices;
    this.items = _commonservices.getItems();
    this.serverurl=_commonservices.url;
    console.log(this.serverurl);
  }

  ngOnInit() {
    this.sevynstreeterform = this.fb.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", SevynstreeterComponent.validateEmail],
      phone: ["", Validators.required],
      zipcode: ["", Validators.required],
      terms: ["", Validators.required],
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
    console.log(this.sevynstreeterform.valid);

    for (x in this.sevynstreeterform.controls) {
      console.log(this.sevynstreeterform.controls[x]);
      this.sevynstreeterform.controls[x].markAsTouched();
    }

    var link = this.serverurl+'sevynstreeter';
    // var link = 'http://localhost:3005/signup';
       if (this.sevynstreeterform.valid) {
      var data = {
        firstname: formval.firstname,
        lastname: formval.lastname,
        email: formval.email,
        phone: formval.phone,
        zipcode: formval.zipcode,
        terms: formval.terms
      };
      this._http.post(link, data)
          .subscribe(res => {
            var result = res.json();
          }, error => {
            console.log("Oooops!");
          });
    }
  }

}
