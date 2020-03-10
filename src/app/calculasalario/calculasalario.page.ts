import { Component, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calculasalario',
  templateUrl: 'calculasalario.page.html',
  styleUrls: ['calculasalario.page.scss']
})
export class CalculaSalarioPage {

  constructor(public alertController: AlertController) { 
    
  }

    @Input() vHora="";
  @Input() nHora="";
  @Input() valorsalario;

   
  async showSalario() {
    
    if (this.vHora!="" || this.nHora!=""){
      this.valorsalario = ((31.5 * (Number(this.vHora)) * (Number(this.nHora)) + 28)/6).toFixed(2);
      this.vHora=""
      this.nHora=""         
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
