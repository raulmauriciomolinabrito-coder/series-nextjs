import {
  maxValue,
  minLength,
  minValue,
  number,
  object,
  pipe,
  string,
  url,
} from "valibot";

export const seriesSchema = object({
  titulo: pipe(
    string(),
    minLength(2, "El título debe tener al menos 2 caracteres"),
  ),
  genero: pipe(
    string(),
    minLength(3, "El género debe tener al menos 3 caracteres"),
  ),
  sinopsis: pipe(
    string(),
    minLength(20, "La sinopsis debe tener al menos 20 caracteres"),
  ),
  urlPortada: pipe(string(), url("La URL de portada no es válida")),
  estreno: pipe(number(), minValue(1900), maxValue(2099)),
  calificacion: pipe(number(), minValue(0), maxValue(10)),
  plataforma: pipe(
    string(),
    minLength(2, "La plataforma debe tener al menos 2 caracteres"),
  ),
});
