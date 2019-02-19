import { Component, OnInit , AfterViewInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-ong-page',
  templateUrl: './ong-page.component.html',
  styleUrls: ['./ong-page.component.scss']
})
export class OngPageComponent implements OnInit , AfterViewInit {

  constructor(public auth: AuthService) { }

  ngOnInit () {
    setTimeout (() => {
        this.auth.colornav = false;
    });
}


ngAfterViewInit() {
    setTimeout (() => {

    this.auth.colornav = false;


    });

}

}
