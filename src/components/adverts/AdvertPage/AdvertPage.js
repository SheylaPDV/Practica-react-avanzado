import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAdvert } from "../../../store/selectors";
import AdvertDetail from "./AdvertDetail";

import { advertLoaded, deletedAdvert } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const useAdvert = (advertId) => {
  const dispatch = useDispatch();

  const advert = useSelector(getAdvert(advertId));

  useEffect(() => {
    dispatch(advertLoaded(advertId));
  }, [dispatch, advertId]);

  return advert;
};

function AdvertPage() {
  const dispatch = useDispatch();
  const { advertId } = useParams();
  const advert = useAdvert(advertId);

  const handleDelete = () => {
    dispatch(deletedAdvert(advertId));
  };

  return <>{advert && <AdvertDetail onDelete={handleDelete} {...advert} />}</>;
}

export default AdvertPage;
