

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private swUpdate: SwUpdate, public auth: AuthService) {
  }
  title = 'app';

  jaja = "jaja"



  ngOnInit() {

    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

          if(confirm("Nueva version de impulsa, desea actualizarla?")) {

              window.location.reload();
          }

        });
      }
}


}


