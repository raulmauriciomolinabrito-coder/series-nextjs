export interface PostSeriesRequest {
  titulo: string;
  genero: string;
  sinopsis: string;
  urlPortada: string;
  estreno: number;
  calificacion: number;
  plataforma: string;
}

export interface PostSeriesResponse {
  id: number;
  titulo: string;
  genero: string;
  sinopsis: string;
  urlPortada: string;
  estreno: number;
  calificacion: number;
  plataforma: string;
}

export interface DeleteSeriesResponse {
  id: number;
  titulo: string;
  genero: string;
  sinopsis: string;
  urlPortada: string;
  estreno: number;
  calificacion: number;
  plataforma: string;
}
