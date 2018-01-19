import { Component } from '@angular/core';
import { ServerService} from "./server.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loadedFeature = 'contact';
  contacts = [{
    email: 'gary@gmail.com',
    fname: 'Gary',
    id: 3,
    lname: 'Riches',
    phone: '444-444-4444'
  },
    {
      email: 'lary@gmail.com',
      fname: 'Lary',
      id: 3,
      lname: 'Prim',
      phone: '444-444-4444'
    }
  ];
  constructor(private serverService: ServerService){

  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
  onSave(){
    this.serverService.storeServers(this.contacts)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

}
