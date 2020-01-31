import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Projeto Angular 7/8';
  public mes_selecionado = '';
  public mostrar = false;
  meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  evento(e: Event) {
    if(this.mostrar){
      this.mostrar = false;
    }else{
      this.mostrar = true;
    }
  }
}
