import { useState } from "react";
import { DeleteSeriesResponse } from "../interfaces/postseries.interface";
import { deleteSeries } from "../services/getseries.service";

export function useDeleteSeries() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const removeSeries = async (id: number): Promise<DeleteSeriesResponse> => {
    setLoading(true);
    setError(null);

    try {
      const deletedSeries = await deleteSeries(id);
      return deletedSeries;
    } catch (err) {
      setError("No se pudo eliminar la serie");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    removeSeries,
    loading,
    error,
  };
}
