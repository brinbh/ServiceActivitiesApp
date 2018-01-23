import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AccountComponent} from "./account/account.component";
import {ActivityComponent} from "./activity/activity.component";
import {DocumentsComponent} from "./documents/documents.component";
import {EventsComponent} from "./events/events.component";
import {FormsComponent} from "./forms/forms.component";
import {RulesComponent} from "./rules/rules.component";


const appRoutes: Routes = [
  { path: "", redirectTo: "start-up", pathMatch: "full"},
  { path: "account/:id", component: AccountComponent},
  { path: "activity/:program", component: ActivityComponent, children: [
    { path: "contacts", component: AccountComponent},
    { path: "documents", component: DocumentsComponent},
    { path: "events", component: EventsComponent},
    { path: "forms", component: FormsComponent},
    { path: "rules", component: RulesComponent}
  ]}
  ]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
