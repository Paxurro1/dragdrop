import { Alumno } from "./alumno";

export interface empresaResponse {
  cif: string;
  nombre: string;
  alumnosAsignados: Alumno[];
}
