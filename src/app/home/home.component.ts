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
            transform: 'scale(1)'
        })),
        state('liked', style({
            color: '#e74c3c',
            opacity: '6',
            transform: 'scale(1.2)'
        })),
        transition('unliked <=> liked', animate('350ms ease-out',  ))
    ])
  ]
})
export class HomeComponent implements OnInit {

  public likeState: string = 'unliked';
  public iconName: string = 'heart-empty';

  constructor() { }
  status: boolean = false;
  ngOnInit() {
  }

  toggleLikeState(){


    this.status = !this.status;


    if(this.likeState == 'unliked'){
      this.likeState = 'liked';
      this.iconName = 'heart';
    } else {
      this.likeState = 'unliked';
      this.iconName = 'heart-empty';
    }



  }

clickEvent(){
    this.status = !this.status;
}


  scroll(id) {

    console.log('el id: ', id);
    const el = document.getElementById(id);
    el.scrollIntoView();
  }

}
