import { Alumno } from "./alumno";
import { empresaResponse } from "./empresaResponse";

export class Empresa {

  static empresaJSON(obj: empresaResponse) {
    return new Empresa(
      obj['cif'],
      obj['nombre'],
      obj['alumnosAsignados']
    );
  }

  constructor(
    public cif: string,
    public nombre: string,
    public alumnosAsignados?: Alumno[]
  ) { }
}
