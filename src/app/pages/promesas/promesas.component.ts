import { Component, OnInit } from '@angular/core';
import { resolve } from 'chart.js/helpers';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrl: './promesas.component.css'
})
export class PromesasComponent implements OnInit {
  ngOnInit(): void {


    this.getUsuarios().then(usuarios => {
      console.log(usuarios);

    })




  //   const promesa = new Promise((resolve, reject) => {


  //   if (false) {
  //     resolve('Hola Mundo')

  //   }else {
  //     reject('Algo ha salido mal')
  //   }

  //   })

  //   promesa.then((mensaje) => {
  //     console.log(mensaje);

  //   })

  //   .catch( error => console.log('Error', error))
  //   console.log('Fin Init');

  }

  getUsuarios() {


    const promesa = new Promise(resolve => {

      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => console.log(body.data))
    })

    return promesa
  }
  }

