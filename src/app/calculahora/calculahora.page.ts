import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calculahora',
  templateUrl: 'calculahora.page.html',
  styleUrls: ['calculahora.page.scss']
})
export class CalculaHora {
   
  constructor(public alertController: AlertController) {
    
  }
  @Input() vHora1;   
  @Input() vBruto;
  @Input() valorhora;
  
  async showHora() {
    this.valorhora = (((this.vBruto*6) - 28)/(this.vHora1 * 31.5)).toFixed(2);
    /*const alert = await this.alertController.create({
      header: 'Valor da hora aula',
      //subHeader: 'Valor da hora aula',
      message: this.valorhora,
      buttons: ['OK']
    });*/
    
    //await alert.present();
    this.vHora1=""
    this.vBruto=""
  }  
}
