import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('heart', [
        state('unliked', style({
            color: '#040000',
            opacity: '6',
            transform: 'scale(1.0)',
        })),
        state('liked', style({
            color: '#d50000',
            opacity: '6',
            transform: 'scale(1.3)',
        })),

        transition('unliked <=> liked', animate('160ms ease-out', ))
    ])
  ]
})
export class HomeComponent implements OnInit {

  public likeState1: string = 'unliked';
  public likeState2: string = 'unliked';
  public likeState3: string = 'unliked';
  public iconName: string = 'heart-empty';

  constructor() { }
  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  ngOnInit() {
  }

  toggleLikeState(){

    if(this.likeState1 == 'unliked'){
      this.likeState1 = 'liked';
      this.iconName = 'heart';
    } else {
      this.likeState1 = 'unliked';
      this.iconName = 'heart-empty';
    }

    this.status1 = !this.status1;

  }

  scroll(id) {

    console.log('el id: ', id);
    const el = document.getElementById(id);
    el.scrollIntoView();
  }

}
