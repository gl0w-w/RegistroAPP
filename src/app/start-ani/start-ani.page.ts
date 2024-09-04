import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-start-ani',
  templateUrl: './start-ani.page.html',
  styleUrls: ['./start-ani.page.scss'],
})
export class StartAniPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    setTimeout(() => {
      this.navCtrl.navigateRoot('/login');
    }, 800); 
}

}