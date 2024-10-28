import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./components/button/button.component";
import { EntryDataComponent } from './components/entry-data/entry-data.component';
import { TitleComponent } from './components/title/title.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from "./components/card/card.component";
import { CompAtributosComponent } from "./components/comp-atributos/comp-atributos.component";
import { InputComponent } from './lista/input/input.component';
import { ListViewComponent } from './lista/list-view/list-view.component';
import { ListaModule } from './lista/lista.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, EntryDataComponent, TitleComponent, CommonModule, CardComponent, CompAtributosComponent, CompAtributosComponent, ListaModule, ListViewComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-project';
  buttonLabel: string = 'Carrinho';
  isAliveTitle: boolean = true;

  disposeTitle(): void {
    this.isAliveTitle = false;
  }
}
