import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  produtos: string[] = [];
  menuType: string = 'superUser';

  constructor(){
    this.produtos = [
      'mouse',
      'teclado',
      'fonte', 
      'cabo'
    ]
  }

  adicionar(): void {
    this.produtos.push('gabinete');
  }

  remover(i: number): void{
    this.produtos.splice(i, 1);
  }

}
