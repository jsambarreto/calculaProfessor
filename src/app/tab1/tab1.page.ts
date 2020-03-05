import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public alertController: AlertController) {
    
  }
  @Input() vHora1;   
  @Input() vBruto;
  @Output() resultado = new EventEmitter();
  
  async showHora() {
    var valorhora = (((this.vBruto*6) - 28)/(this.vHora1 * 31.5)).toFixed(2);
    
    const alert = await this.alertController.create({
      header: 'Valor da hora aula',
      //subHeader: 'Valor da hora aula',
      message: valorhora,
      buttons: ['OK']
    });
    
    await alert.present();
    this.vHora1=""
    this.vBruto=""
  }
  
}
