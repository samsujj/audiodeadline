import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {appRoutingProviders, routing} from 'route';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { KendrickComponent } from './kendrick/kendrick.component';
import { AboutAudioDeadlineComponent } from './about-audio-deadline/about-audio-deadline.component';
import { CommunityComponent } from './community/community.component';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { CookieService } from 'angular2-cookie/services/cookies.service';
import { UsherComponent } from './usher/usher.component';
import { SevynstreeterComponent } from './sevynstreeter/sevynstreeter.component';
import { AdminleftComponent } from './adminleft/adminleft.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { AffiliatelistComponent } from './affiliatelist/affiliatelist.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import { UserlistComponent } from './userlist/userlist.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AffiliatedashboardComponent } from './affiliatedashboard/affiliatedashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import {CookieService} from 'ngx-cookie-service';
import { Communitysignup1Component } from './communitysignup1/communitysignup1.component';
import { Communitysignup2Component } from './communitysignup2/communitysignup2.component';
import { Communitysignup3Component } from './communitysignup3/communitysignup3.component';
import { ViewbrodcastComponent } from './viewbrodcast/viewbrodcast.component';
import { NamefilterPipe } from './namefilter.pipe';
import { AgreementComponent } from './agreement/agreement.component';
import { ArtistsexchangeComponent } from './artistsexchange/artistsexchange.component';
import { CompetitionComponent } from './competition/competition.component';
import { TrainingartistsComponent } from './trainingartists/trainingartists.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogaddComponent } from './blogadd/blogadd.component';
import { BlogeditComponent } from './blogedit/blogedit.component';
import {CKEditorModule} from 'ngx-ckeditor';
import { SafehtmlPipe } from './safehtml.pipe';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AffiliatereportComponent } from './affiliatereport/affiliatereport.component';
import { BlogfilterPipe } from './blogfilter.pipe';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { SponsorlistComponent } from './sponsorlist/sponsorlist.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AmbassadorsignupComponent } from './ambassadorsignup/ambassadorsignup.component';
import { AmbassadorlistComponent } from './ambassadorlist/ambassadorlist.component';
import { TicketsaleComponent } from './ticketsale/ticketsale.component';
import { CommunitysignupComponent } from './communitysignup/communitysignup.component';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import { FanlistComponent } from './fanlist/fanlist.component';
import { ModellistComponent } from './modellist/modellist.component';
import { DancerlistComponent } from './dancerlist/dancerlist.component';
import { MusicianlistComponent } from './musicianlist/musicianlist.component';
import { SerchbyrolePipe } from './serchbyrole.pipe';
import { Communitysignupstep2Component } from './communitysignupstep2/communitysignupstep2.component';
import { GenreaddComponent } from './genreadd/genreadd.component';
import { GenreeditComponent } from './genreedit/genreedit.component';
import { GenrelistComponent } from './genrelist/genrelist.component';
import { AmbassadoragreementComponent } from './ambassadoragreement/ambassadoragreement.component';
import { AmbassadordashboardComponent } from './ambassadordashboard/ambassadordashboard.component';
import { HostfliistylzComponent } from './hostfliistylz/hostfliistylz.component';
import { PromocodeaddComponent } from './promocodeadd/promocodeadd.component';
import { PromocodeeditComponent } from './promocodeedit/promocodeedit.component';
import { PromocodelistComponent } from './promocodelist/promocodelist.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { CommssionlistComponent } from './commssionlist/commssionlist.component';
import { ArtistfooterComponent } from './artistfooter/artistfooter.component';
import { ArtistheaderComponent } from './artistheader/artistheader.component';
import { DatesComponent } from './dates/dates.component';
import { TeamComponent } from './team/team.component';
import { TrendingartistComponent } from './trendingartist/trendingartist.component';
import { Oreder1Pipe } from './oreder1.pipe';
import { Oreder2Pipe } from './oreder2.pipe';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {OwlNativeDateTimeModule, OwlDateTimeModule} from "ng-pick-datetime";
import { Commission1Pipe } from './commission1.pipe';
import { Commission2Pipe } from './commission2.pipe';
import { Commission3Pipe } from './commission3.pipe';
import { NeweventrsvpComponent } from './neweventrsvp/neweventrsvp.component';
import { BannertestComponent } from './bannertest/bannertest.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    KendrickComponent,
    AboutAudioDeadlineComponent,
    CommunityComponent,
    AffiliateComponent,
    ContactusComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    UsherComponent,
    SevynstreeterComponent,
    AdminleftComponent,
    AdminlistComponent,
    AdminaddComponent,
    AdmineditComponent,
    AffiliatelistComponent,
    UserlistComponent,
    MyaccountComponent,
    UpdateprofileComponent,
    ChangepasswordComponent,
    AffiliatedashboardComponent,
    UserdashboardComponent,
    Communitysignup1Component,
    Communitysignup2Component,
    Communitysignup3Component,
    ViewbrodcastComponent,
    NamefilterPipe,
    AgreementComponent,
    ArtistsexchangeComponent,
    CompetitionComponent,
    TrainingartistsComponent,
    BloglistComponent,
    BlogaddComponent,
    BlogeditComponent,
    SafehtmlPipe,
    ForgotpasswordComponent,
    AffiliatereportComponent,
    BlogfilterPipe,
    BlogsComponent,
    BlogdetailsComponent,
    SponsorlistComponent,
    ResetpasswordComponent,
    AmbassadorsignupComponent,
    AmbassadorlistComponent,
    TicketsaleComponent,
    CommunitysignupComponent,
    FanlistComponent,
    ModellistComponent,
    DancerlistComponent,
    MusicianlistComponent,
    SerchbyrolePipe,
    Communitysignupstep2Component,
    GenreaddComponent,
    GenreeditComponent,
    GenrelistComponent,
    AmbassadoragreementComponent,
    AmbassadordashboardComponent,
    HostfliistylzComponent,
    PromocodeaddComponent,
    PromocodeeditComponent,
    PromocodelistComponent,
    ProductaddComponent,
    ProducteditComponent,
    ProductlistComponent,
    OrderlistComponent,
    CommssionlistComponent,
    ArtistfooterComponent,
    ArtistheaderComponent,
    DatesComponent,
    TeamComponent,
    TrendingartistComponent,
    Oreder1Pipe,
    Oreder2Pipe,
    Commission1Pipe,
    Commission2Pipe,
    Commission3Pipe,
    NeweventrsvpComponent,
    BannertestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    routing,
    ReactiveFormsModule,
      CKEditorModule,
      ModalModule.forRoot(),
      ScrollToModule.forRoot()
  ],providers: [appRoutingProviders, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
