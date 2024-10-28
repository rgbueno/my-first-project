import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentChecked, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy {
    
  @Input() nome: string = '';
  quantidade: number = 0;

  constructor(){
    console.log('constructor')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

  adicionar(){
    this.quantidade += 1;
  }

  decrementar(){
    this.quantidade -= 1;
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
  }

  ngOnInit(): void {
    this.nome = `ola ${this.nome}`;
    console.log('ngOnInit');
  }



}
