import { Routes } from '@angular/router';

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
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { NotificationComponent } from './notification/notification.component';
import { VendorsComponent } from './vendors/vendors.component';
import { EventsComponent } from './events/events.component';
import { RewardsComponent } from './rewards/rewards.component';
import { VendordetailComponent } from './vendordetail/vendordetail.component';
import { UserhistoryComponent } from './userhistory/userhistory.component';
import { PromocodeComponent } from './promocode/promocode.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { UserticketsComponent } from './usertickets/usertickets.component';
import { UserbikedetailComponent } from './userbikedetail/userbikedetail.component';
import { EvebtdetailComponent } from './evebtdetail/evebtdetail.component';
// import { UsersDetailComponent } from './users-detail/users-detail.component';
import { BikedetailComponent } from './bikedetail/bikedetail.component';
import { RewardhistoryComponent } from './rewardhistory/rewardhistory.component';
import { NotificationhistoryComponent } from './notificationhistory/notificationhistory.component';
import { VendorbikedetailComponent } from './vendorbikedetail/vendorbikedetail.component';
import { VendoreventComponent } from './vendorevent/vendorevent.component';
import { VendoreventdetailComponent } from './vendoreventdetail/vendoreventdetail.component';
import { SubaccountComponent } from './subaccount/subaccount.component';


export const PagesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'helperclasses',
        component: HelperclassesComponent,
        data: {
          title: 'Helper Classes',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Helper Classes' }
          ]
        }
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Users',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Users' }
          ]
        }
      },
      {
        path: 'usershistory',
        component: UserhistoryComponent,
        data: {
          title: 'User History',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'User History' }
          ]
        }
      },
      {
        path: 'userbikes',
        component: UserbikedetailComponent,
        data: {
          title: 'User Bikes Detail',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'User Bikes Detail' }
          ]
        }
      },
      {
        path: 'orderhistory/:id',
        component: OrderHistoryComponent,
        data: {
          title: 'Order History',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Order History' }
          ]
        }
      },
      {
        path: 'vendors',
        component: VendorsComponent,
        data: {
          title: 'Vendors',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Vendors' }
          ]
        }
      },
      {
        path: 'usertickets',
        component: UserticketsComponent,
        data: {
          title: 'User Tickets',
          urls: [
            { title: 'Dashboard', url: '/UserTickets' },
            { title: 'User Tickets' }
          ]
        }
      },
      {
        path: 'vendorsdetail/:id',
        component: VendordetailComponent,
        data: {
          title: 'Vendor Detail',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Vendors Detail' }
          ]
        }
      },
      {
        path: 'vendorbikedetail',
        component: VendorbikedetailComponent,
        data: {
          title: 'Vendor Bike Detail',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Vendors Bike Detail' }
          ]
        }
      },
      {
        path: 'subaccount/:id',
        component: SubaccountComponent,
        data: {
          title: 'Sub Account Detail',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Sub Account Detail' }
          ]
        }
      },
      
      {
        path: 'vendorevent',
        component: VendoreventComponent,
        data: {
          title: 'Vendor Events',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Vendors Event' }
          ]
        }
      },
      {
        path: 'vendoreventdetail',
        component: VendoreventdetailComponent,
        data: {
          title: 'Vendor Events Detail',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Vendors Event Detail' }
          ]
        }
      },
      {
        path: 'events',
        component: EventsComponent,
        data: {
          title: 'Events',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Events' }
          ]
        }
      },
      {
        path: 'eventsdetail',
        component: EvebtdetailComponent,
        data: {
          title: 'Event Detail',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Event Detail'}
          ]
        }
      },
      {
        path: 'rewards',
        component: RewardsComponent,
        data: {
          title: 'Rewards',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Rewards' }
          ]
        }
      },
      {
        path: 'rewardshistory',
        component: RewardhistoryComponent,
        data: {
          title: 'Rewards History',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Rewards History' }
          ]
        }
      },
      {
        path: 'promocode',
        component: PromocodeComponent,
        data: {
          title: 'Promo Code',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Promo Code' }
          ]
        }
      },
      {
        path: 'invoice',
        component: InvoiceComponent,
        data: {
          title: 'Invoice',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Invoice Page' }
          ]
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'Profile',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Profile Page' }
          ]
        }
      },
      {
        path: 'pricing',
        component: PricingComponent,
        data: {
          title: 'Pricing',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Pricing Page' }
          ]
        }
      },

      // {
      //   path: 'usersdetail',
      //   component: UsersDetailComponent,
      //   data: {
      //     title: 'Users Detail',
      //     urls: [
      //       { title: 'Dashboard', url: '/dashboard' },
      //       { title: 'Users' }
      //     ]
      //   }
      // },
      {
        path: 'tours',
        component: ToursComponent,
        data: {
          title: 'Tours',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Tours' }
          ]
        }
      },
      {
        path: 'bikes',
        component: BikesComponent,
        data: {
          title: 'Rides',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Rides' }
          ]
        }
      },
      {
        path: 'bikesdetail',
        component: BikedetailComponent,
        data: {
          title: 'Bikes Detail',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Bikes Detail' }
          ]
        }
      },
      {
        path: 'destination',
        component: DestinationComponent,
        data: {
          title: 'Destination',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Destination' }
          ]
        }
      },
      {
        path: 'hotels',
        component: HotelsComponent,
        data: {
          title: 'Hotels',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Hotels' }
          ]
        }
      },
      {
        path: 'calculator',
        component: CalculatorComponent,
        data: {
          title: 'Calculator',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Caculator' }
          ]
        }
      },
      {
        path: 'reviews',
        component: ReviewsComponent,
        data: {
          title: 'Reviews',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Revies' }
          ]
        }
      },
      {
        path: 'revenue',
        component: RevenueManagementComponent,
        data: {
          title: 'Revenue',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Revenue' }
          ]
        }
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
        data: {
          title: 'Analytics',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Analytics' }
          ]
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'Profile',
          urls: [
            { title: 'Dashboard', url: '/profile' },
            { title: 'Profile' }
          ]
        }
      },

      {
        path: 'notification',
        component: NotificationComponent,
        data: {
          title: 'Notification',
          urls: [
            { title: 'Dashboard', url: '/notification' },
            { title: 'Notification' }
          ]
        }
      },
      {
        path: 'notificationhistory',
        component: NotificationhistoryComponent,
        data: {
          title: 'Notification History',
          urls: [
            { title: 'Dashboard', url: '/notification_history' },
            { title: 'Notification History' }
          ]
        }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About',
          urls: [
            { title: 'Dashboard', url: '/about' },
            { title: 'About' }
          ]
        }
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact',
          urls: [
            { title: 'Dashboard', url: '/contact' },
            { title: 'Contact' }
          ]
        }
      },
      {
        path: 'faq',
        component: FaqComponent,
        data: {
          title: 'Faq',
          urls: [
            { title: 'Dashboard', url: '/faq' },
            { title: 'Faq' }
          ]
        }
      }
    ]
  }
];