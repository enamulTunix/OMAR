import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete'
import { MatSliderModule } from '@angular/material/slider';
import { PagesRoutes } from './pages.routing';
import { HelperclassesComponent } from './helper-classes/hc.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';
import { PricingComponent } from './pricing/pricing.component';
import { UsersComponent } from './users/users.component';
import { BikesComponent } from './bikes/bikes.component';
import { ToursComponent } from './tours/tours.component';
import { DestinationComponent } from './destination/destination.component';
import { HotelsComponent } from './hotels/hotels.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RevenueManagementComponent } from './revenue-management/revenue-management.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CmsComponent } from './pages/cms/cms.component';
import { AboutComponent } from './about/about.component';
import { QuillModule } from 'ngx-quill';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NotificationComponent } from './notification/notification.component';
import { VendorsComponent } from './vendors/vendors.component';
import { EventsComponent } from './events/events.component';
import { RewardsComponent } from './rewards/rewards.component';
import { VendordetailComponent } from './vendordetail/vendordetail.component';
import { UserhistoryComponent } from './userhistory/userhistory.component';
import { PromocodeComponent } from './promocode/promocode.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { UserticketsComponent } from './usertickets/usertickets.component';
import { TranslateModule } from '@ngx-translate/core';
import { UserbikedetailComponent } from './userbikedetail/userbikedetail.component';
import { EvebtdetailComponent } from './evebtdetail/evebtdetail.component';
import { BikedetailComponent } from './bikedetail/bikedetail.component';
import { RewardhistoryComponent } from './rewardhistory/rewardhistory.component'
import {MatSelectModule} from '@angular/material/select';
import { NotificationhistoryComponent } from './notificationhistory/notificationhistory.component';
import { VendorbikedetailComponent } from './vendorbikedetail/vendorbikedetail.component';
import { VendoreventComponent } from './vendorevent/vendorevent.component';
import { VendoreventdetailComponent } from './vendoreventdetail/vendoreventdetail.component';
// import { UsersDetailComponent } from './users-detail/users-detail.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SubaccountComponent } from './subaccount/subaccount.component';
@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(PagesRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
    QuillModule.forRoot(),
    ChartsModule,
    ChartistModule,
    NgxChartsModule,
    NgxDatatableModule,
    GooglePlaceModule,
    TranslateModule,
    MatSliderModule,
    MatSelectModule,
    MatDatepickerModule

  ],
  declarations: [
    HelperclassesComponent,

    InvoiceComponent,
    ProfileComponent,
    UsersComponent,
    BikesComponent,
    ToursComponent,
    DestinationComponent,
    HotelsComponent,
    CalculatorComponent,
    RevenueManagementComponent,
    ReviewsComponent,
    AnalyticsComponent,
    CmsComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    NotificationComponent,
    VendorsComponent,
    EventsComponent,
    RewardsComponent,
    VendordetailComponent,
    UserhistoryComponent,
    PromocodeComponent,
    OrderHistoryComponent,
    UserticketsComponent,
    UserbikedetailComponent,
    EvebtdetailComponent,
    BikedetailComponent,
    RewardhistoryComponent,
    NotificationhistoryComponent,
    VendorbikedetailComponent,
    VendoreventComponent,
    VendoreventdetailComponent,
    SubaccountComponent
  ]
})
export class PagesModule { }