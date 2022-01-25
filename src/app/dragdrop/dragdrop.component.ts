import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno';
import { Empresa } from '../models/empresa';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.scss']
})
export class DragdropComponent implements OnInit {

  alumnos: Alumno[] = [
    { nombre: "Daniel", dni: "1", codCurso: "111" },
    { nombre: "Álvaro", dni: "2", codCurso: "111" },
    { nombre: "Laura", dni: "3", codCurso: "111" },
    { nombre: "Malena", dni: "4", codCurso: "111" },
    { nombre: "David", dni: "5", codCurso: "111" },
    { nombre: "Pablo", dni: "6", codCurso: "111" }
  ];
  empresas: Empresa[] = [
    {
      cif: "33", nombre: "Indra", alumnosAsignados: [
        { nombre: "Juan", dni: "7", codCurso: "111" },
        { nombre: "Pedro", dni: "8", codCurso: "111" }
      ]
    },
    { cif: "34", nombre: "Everis" },
    {
      cif: "35", nombre: "Iberfan", alumnosAsignados: [
        { nombre: "Paco", dni: "9", codCurso: "111" },
        { nombre: "Luis", dni: "10", codCurso: "111" },
        { nombre: "Alonso", dni: "11", codCurso: "111" }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {


    // this.eventosCasillas();
    // this.eventosFichas();
  }

  drag(ev: any) {
    console.log("entra");
    ev.dataTransfer.setData("alumno", ev.target.id);
  }

  allowDrop(ev: any) {
    ev.preventDefault();
  }

  drop(ev: any) {
    var data = ev.dataTransfer.getData("alumno");
    console.log(ev.target.className);
    if (ev.target.className == "empresa" || ev.target.className == "listaAlumnos") {
      data.parentNode.removeChild(data);
      ev.target.appendChild(document.getElementById(data));
    }
  }
  // eventosFichas() {

  //   var fichas = document.querySelectorAll(".arrastrables div");

  //   for (let i = 0; i < fichas.length; i++) {
  //     fichas[i].addEventListener("dragstart",
  //       function (event: any) {
  //         event.dataTransfer.setData("text", event.target.id);
  //       });
  //   }
  // }

  // eventosCasillas() {

  //   var casillas = document.querySelectorAll(".tablero div") as NodeListOf <HTMLElement>;

  //   for (let i = 0; i < casillas.length; i++) {

  //     // Evitamos el comportamiento por defecto
  //     casillas[i].addEventListener("dragover",
  //       function (event: any) {
  //         event.preventDefault();
  //       }
  //     );

  //     casillas[i].addEventListener("drop",
  //       function (event: any) {
  //         event.preventDefault();

  //         this.appendChild(
  //           document.getElementById(
  //             event.dataTransfer.getData("text")
  //           )
  //         );

  //       });
  //   }
  // }

}
