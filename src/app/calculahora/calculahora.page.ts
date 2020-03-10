import { Component, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-calculahora',
  templateUrl: 'calculahora.page.html',
  styleUrls: ['calculahora.page.scss']
})
export class CalculaHora {

  constructor(public alertController: AlertController) {
    
  }
  @Input() vHora1="";   
  @Input() vBruto="";
  @Input() valorhora;
  async showHora() {
    if (this.vBruto!="" || this.vHora1!=""){
      this.valorhora = (((Number(this.vBruto)*6) - 28)/(Number(this.vHora1) * 31.5)).toFixed(2);
      this.vHora1=""
      this.vBruto=""
            }    
    else{
        const alert = await this.alertController.create({
          header: 'Campo obrigatório em branco',
          message: 'É necessario informar os valores para o cálculo.', 
          buttons: ['OK']
        });
        await alert.present();
        
      }
      
  }
  
}
