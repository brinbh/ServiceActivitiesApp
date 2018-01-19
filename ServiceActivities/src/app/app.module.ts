import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsComponent } from './forms/forms.component';
import { DocumentsComponent } from './documents/documents.component';
import { EventsComponent } from './events/events.component';
import { RulesComponent } from './rules/rules.component';
import { AccountComponent } from './account/account.component';
import { ActivityComponent } from './activity/activity.component';
import { AccountInfoComponent } from './account/account-info/account-info.component';
import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { ActivityItemComponent } from './activity/activity-item/activity-item.component';
import { ActivityListComponent } from './activity/activity-list/activity-list.component';
import {AppRoutingModule} from "./app-routing";
import { DocumentItemComponent } from './documents/document-item/document-item.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { DocumentAddComponent } from './documents/document-add/document-add.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { ContactAddComponent } from './contacts/contact-add/contact-add.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventItemComponent } from './events/event-item/event-item.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { EventAddComponent } from './events/event-add/event-add.component';
import { EventNotificationsComponent } from './events/event-notifications/event-notifications.component';
import { NotificationItemComponent } from './events/event-notifications/notification-item/notification-item.component';
import { NotificationListComponent } from './events/event-notifications/notification-list/notification-list.component';
import { FormOneDetailComponent } from './forms/form-one-detail/form-one-detail.component';
import { FormTwoDetailComponent } from './forms/form-two-detail/form-two-detail.component';
import { FormItemComponent } from './forms/form-item/form-item.component';
import { FormListComponent } from './forms/form-list/form-list.component';
import { RuleDetailComponent } from './rules/rule-detail/rule-detail.component';
import { RuleItemComponent } from './rules/rule-item/rule-item.component';
import { RuleListComponent } from './rules/rule-list/rule-list.component';
import {FormsModule} from "@angular/forms";
import { StartUpComponent } from './start-up/start-up.component';
import {ServerService} from "./server.service";
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    FormsComponent,
    DocumentsComponent,
    EventsComponent,
    RulesComponent,
    AccountComponent,
    ActivityComponent,
    AccountInfoComponent,
    AccountEditComponent,
    ActivityItemComponent,
    ActivityListComponent,
    DocumentItemComponent,
    DocumentListComponent,
    DocumentEditComponent,
    DocumentAddComponent,
    ContactDetailComponent,
    ContactItemComponent,
    ContactListComponent,
    ContactEditComponent,
    ContactAddComponent,
    EventDetailComponent,
    EventItemComponent,
    EventListComponent,
    EventEditComponent,
    EventAddComponent,
    EventNotificationsComponent,
    NotificationItemComponent,
    NotificationListComponent,
    FormOneDetailComponent,
    FormTwoDetailComponent,
    FormItemComponent,
    FormListComponent,
    RuleDetailComponent,
    RuleItemComponent,
    RuleListComponent,
    StartUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule

  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
