export interface Festivo {
    id: number;
    nombre: string;
    dia: number;
    mes: number;
    diasPascua?: number; // Opcional, en caso de que no siempre lo envíe el backend
    idTipo?: number; // Opcional, si la API lo incluye
  }