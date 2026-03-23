"use client";

import { useEffect, useState } from "react";
import { GetSeriesResponse } from "../interfaces/getseries.interface";
import { getSeries } from "../services/getseries.service";

export function UseGetSeries() {
  const [series, setSeries] = useState<GetSeriesResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchSeries = async () => {
    setLoading(true);
    try {
      const data = await getSeries();
      setSeries(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  return {
    series,
    loading,
    error,
    refetch: fetchSeries,
  };
}
