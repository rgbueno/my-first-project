import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label: string = '';
  buttonText: string = 'Acessar';
  buttonTexts: string[] = ['Vender', 'Comprar'] ;
  buttonObject = {
    label: 'Add ao carrinho'
  };

  getAlert(text: string){
    alert(text);
  }
}
