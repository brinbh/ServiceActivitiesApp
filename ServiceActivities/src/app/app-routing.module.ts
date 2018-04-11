import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccountComponent} from './account/account.component';
import {ActivityComponent} from './activity/activity.component';
import {DocumentsComponent} from './documents/documents.component';
import {EventsComponent} from './events/events.component';
import {FormsComponent} from './forms/forms.component';
import {RulesComponent} from './rules/rules.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ContactEditComponent} from './contacts/contact-edit/contact-edit.component';
import {ContactDetailComponent} from './contacts/contact-detail/contact-detail.component';
import {StartComponent} from './start/start.component';
import {ContactAddComponent} from './contacts/contact-add/contact-add.component';
import {RuleDetailComponent} from './rules/rule-detail/rule-detail.component';
import {RuleAddComponent} from './rules/rule-add/rule-add.component';
import {AppComponent} from './app.component';
import {ContactListComponent} from './contacts/contact-list/contact-list.component';
import {ActivityMenuComponent} from './activity/activity-menu/activity-menu.component';
import {RuleListComponent} from './rules/rule-list/rule-list.component';
import {AccountInfoComponent} from './account/account-info/account-info.component';


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: StartComponent},
  { path: 'account', component: AccountInfoComponent},
  { path: 'activity', component: ActivityComponent, children: [
      { path: ':id', component: ActivityMenuComponent }
    ]},
  { path: 'contacts', component: ContactsComponent, children: [
    { path: 'list', component: ContactListComponent},
    { path: 'new', component: ContactAddComponent},
    { path: 'list/:id', component: ContactDetailComponent},
    { path: 'list/:id/edit', component: ContactEditComponent}
  ] },
  { path: 'documents', component: DocumentsComponent},
  { path: 'events', component: EventsComponent},
  { path: 'forms', component: FormsComponent},
  { path: 'rules', component: RulesComponent, children: [
      { path: 'list', component: RuleListComponent},
      { path: 'new', component: RuleAddComponent},
    { path: 'list/:id', component: RuleDetailComponent}
    ]
  }
  ]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
