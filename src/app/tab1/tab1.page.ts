import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController, public navCtrl: NavController,
    public navParams: NavParams) {}

  async showHora() {
    

    const alert = await this.alertController.create({
      header: 'Valor da hora aula',
      //subHeader: 'Valor da hora aula',
      message: 'valorHora',
      buttons: ['OK']
    });
  
    await alert.present();
  }
}
