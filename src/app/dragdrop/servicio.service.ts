import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alumno } from '../models/alumno';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  public solicitarAlumnos(dniTutor: string){
    let url: string = "http://127.0.0.1:8000/api/solicitarAlumnos?"+dniTutor;
    return this.http.get<Alumno[]>(url)
  }

  public solicitarEmpresas(dniTutor: string){
    let url: string = "http://127.0.0.1:8000/api/solicitarEmpresas?"+dniTutor;
    return this.http.get<Empresa[]>(url)
  }

  public asignarAlumnos(dniTutor: string, alumnos: Alumno[], empresas: Empresa[]){
    let url: string = "http://127.0.0.1:8000/api/asignarAlumnos";
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let datos = {
      'dniTutor': dniTutor,
      'alumnos': alumnos,
      'empresas': empresas,
    };
    var datosString = JSON.stringify(datos);
    return this.http.post(url, datosString, {headers: headers});
  }
}
