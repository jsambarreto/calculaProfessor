import { Component, Input, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertController: AlertController) { }

  @Input() vHora;
  @Input() nHora;
     
  async showSalario() {
    var salario = ((31.5 * this.vHora * this.nHora + 28)/6).toFixed(2);
    const alert = await this.alertController.create({
      header: 'Valor do salário',
      message: salario, 
      buttons: ['OK']
    });
    this.vHora=""
    this.nHora=""
    await alert.present();
    
  }

}
