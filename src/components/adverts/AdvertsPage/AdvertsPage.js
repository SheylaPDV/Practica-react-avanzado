import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import FiltersForm from "./FiltersForm";
import AdvertsList from "./AdvertsList";
import EmptyList from "./EmptyList";
import storage from "../../../utils/storage";
import { getAdverts } from "../service";
import { defaultFilters, filterAdverts } from "./filters";
import useQuery from "../../../hooks/useQuery";

const getFilters = () => storage.get("filters") || defaultFilters;
const saveFilters = (filters) => storage.set("filters", filters);

function AdvertsPage() {
  // guartdao los filtros en la query-?
  const { isLoading, error, data: adverts = [] } = useQuery(getAdverts);
  // estado de los filtros
  const [filters, setFilters] = useState(getFilters);
  // guarda filtros
  useEffect(() => {
    saveFilters(filters);
  }, [filters]);

  if (error?.statusCode === 401) {
    return <Navigate to="/login" />;
  }

  const filteredAdverts = filterAdverts(adverts, filters);

  return (
    <>
      {/* si anuncios es mayor a 0 and (filtros) */}
      {adverts.length > 0 && (
        <FiltersForm
          initialFilters={filters}
          defaultFilters={defaultFilters}
          prices={adverts.map(({ price }) => price)}
          onFilter={setFilters}
        />
      )}
      {filteredAdverts.length ? (
        <AdvertsList adverts={filteredAdverts} />
      ) : (
        <EmptyList advertsCount={adverts.length} />
      )}
    </>
  );
}

export default AdvertsPage;
