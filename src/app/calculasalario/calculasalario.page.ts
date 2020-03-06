import { Component, Input, Output, Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
//import { CalculaHoraModule } from '../calculahora/calculahora.module'

@Component({
  selector: 'app-calculasalario',
  templateUrl: 'calculasalario.page.html',
  styleUrls: ['calculasalario.page.scss']
})
export class CalculaSalarioPage {

  constructor(public alertController: AlertController) { }

  @Input() vHora;
  @Input() nHora;
  @Input() valorsalario;
  async showSalario() {
    this.valorsalario = ((31.5 * this.vHora * this.nHora + 28)/6).toFixed(2);
    /*const alert = await this.alertController.create({
      header: 'Valor do salário',
      message: this.valorsalario, 
      buttons: ['OK']
    });*/
    this.vHora=""
    this.nHora=""
    //await alert.present();
    
  }

}
