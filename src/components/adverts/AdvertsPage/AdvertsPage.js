import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import FiltersForm from "./FiltersForm";
import AdvertsList from "./AdvertsList";
import EmptyList from "./EmptyList";
import storage from "../../../utils/storage";
// import { getAdverts } from "../service";
import { defaultFilters, filterAdverts } from "./filters";
import useQuery from "../../../hooks/useQuery";

import { useDispatch, useSelector } from "react-redux";
import { getAdverts } from "../../../store/selectors";
import { advertsLoaded } from "../../../store/actions";

const getFilters = () => storage.get("filters") || defaultFilters;

const saveFilters = (filters) => storage.set("filters", filters);

const useAdverts = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);

  useEffect(() => {
    dispatch(advertsLoaded());
  }, [dispatch]);

  return adverts;
};

function AdvertsPage() {
  const adverts = useAdverts();
  const filteredAdverts = adverts;
  const filters = getFilters();
  // const filteredAdverts = filterAdverts(adverts, filters);

  // guartdao los filtros en la query-?
  // const { isLoading, error, data: adverts = [] } = useQuery(getAdverts);
  // estado de los filtros

  // if (error?.statusCode === 401) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <>
      {adverts.length > 0 && (
        <FiltersForm
          initialFilters={filters}
          defaultFilters={defaultFilters}
          prices={adverts.map(({ price }) => price)}
          onFilter={saveFilters}
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
