import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertController: AlertController) {}

  async showSalario() {
    const alert = await this.alertController.create({
      header: 'Valor do salário',
      //subHeader: 'Valor da hora aula',
      message: 'valorSalario',
      buttons: ['OK']
    });
  
    await alert.present();
  }

}
