import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-atributos',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css'
})
export class CompAtributosComponent {
  estilo: string = 'enable';
  corFundo: string = 'red';
  corFonte: string = 'yellow';
  item: string = '';
  lista: string[] = [];

  trocarEstilo() : void{
    if(this.estilo == 'enable')
      this.estilo = 'disable';
    else  
      this.estilo = 'enable';
  }

  adicionarLista(): void {
    this.lista.push(this.item);
    this.item = '';
  }
}
