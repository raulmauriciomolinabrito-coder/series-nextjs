import { apiFetch } from "@/services/api";
import {
  DeleteSeriesResponse,
  PostSeriesRequest,
  PostSeriesResponse,
} from "../interfaces/postseries.interface";
import { GetSeriesResponse } from "../interfaces/getseries.interface";

export function getSeries(): Promise<GetSeriesResponse[]> {
  const respuesta = apiFetch("/series");
  console.log("Respuesta de getSeries:", respuesta);
  return respuesta;
}

export function postSeries(data: PostSeriesRequest): Promise<PostSeriesResponse> {
  return apiFetch("/series", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function deleteSeries(id: number): Promise<DeleteSeriesResponse> {
  return apiFetch(`/series/${id}`, {
    method: "DELETE",
  });
}
