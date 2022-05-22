import React, { useState, useEffect } from "react";
import { advertsLoaded } from "../../../store/actions";
import FiltersForm from "./FiltersForm";
import AdvertsList from "./AdvertsList";
import EmptyList from "./EmptyList";
import storage from "../../../utils/storage";
import { defaultFilters, filterAdverts } from "./filters";
import { useDispatch, useSelector } from "react-redux";
import { getAdverts } from "../../../store/selectors";

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

const AdvertsPage = () => {
  const adverts = useAdverts();

  const [filters, setFilters] = useState(getFilters);
  useEffect(() => {
    saveFilters(filters);
  }, [filters]);

  const filteredAdverts = filterAdverts(adverts, filters);

  return (
    <>
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
};

export default AdvertsPage;
