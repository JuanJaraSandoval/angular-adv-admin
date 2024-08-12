import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: ``
})
export class IncrementadorComponent implements OnInit{

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`
  }

  @Input('valor') progreso: number = 50
  // @Input('valor') progreso: number = 50 renombrar la variable
  @Input()btnClass: string = 'btn btn-primary'

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter()

  cambiarValor(valor: number) {

    if ((this.progreso + valor) > 100) {
      this.valorSalida.emit(100)
      this.progreso = 100;
    } else {
      if ((this.progreso + valor) < 0) {
        this.valorSalida.emit(0)
        this.progreso = 0;
      } else {
        this.progreso = this.progreso + valor;
        this.valorSalida.emit(this.progreso)
      }
    }

  }

  onChange(nuevoValor: number){

    if(nuevoValor >= 100){
      this.progreso = 100
    } else if (nuevoValor <= 0){
      this.progreso = 0
    } else {
      this.progreso = nuevoValor
    }
    this.valorSalida.emit(this.progreso)


  }


}
