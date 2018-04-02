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


const appRoutes: Routes = [
  { path: '', redirectTo: 'StartComponent', pathMatch: 'full'},
  { path: 'account', component: AccountComponent},
  { path: 'contacts', component: ContactsComponent, children: [
    { path: 'new', component: ContactAddComponent},
    { path: ':id', component: ContactDetailComponent},
    { path: ':id/edit', component: ContactEditComponent}
  ] },
  { path: 'documents', component: DocumentsComponent},
  { path: 'events', component: EventsComponent},
  { path: 'forms', component: FormsComponent},
  { path: 'rules', component: RulesComponent, children: [
      { path: 'new', component: RuleAddComponent},
    { path: ':id', component: RuleDetailComponent}
    ]
  }
  ]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
