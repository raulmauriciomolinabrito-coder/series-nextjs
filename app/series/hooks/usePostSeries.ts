"use client";

import { useState } from "react";
import {
  PostSeriesRequest,
  PostSeriesResponse,
} from "../interfaces/postseries.interface";
import { postSeries } from "../services/getseries.service";

export function usePostSeries() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createSeries = async (
    data: PostSeriesRequest,
  ): Promise<PostSeriesResponse> => {
    setLoading(true);
    setError(null);

    try {
      const createdSeries = await postSeries(data);
      return createdSeries;
    } catch (err) {
      setError("No se pudo crear la serie");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    createSeries,
    loading,
    error,
  };
}
