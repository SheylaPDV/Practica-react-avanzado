import React, { useCallback } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";

import AdvertDetail from "./AdvertDetail";
import { getAdvert, deleteAdvert } from "../service";
import useQuery from "../../../hooks/useQuery";
import useMutation from "../../../hooks/useMutation";
// PAGINA ANUNCIO
function AdvertPage() {
  // AQUI VIENE EL ID DEL ANUNCIO
  const { advertId } = useParams();

  const navigate = useNavigate();
  const getAdvertById = useCallback(() => getAdvert(advertId), [advertId]);

  const { isLoading, error, data: advert } = useQuery(getAdvertById);
  //  (METERLO EN REDUX) logica de resetError isLoading execute error EN USEMUTATION
  const mutation = useMutation(deleteAdvert);

  // BORRAR EN DETALLE ANUNCIO, METER EN REDUX TAMBIEN, ESTA EN USEMUTATION AHORA
  const handleDelete = () => {
    mutation.execute(advertId).then(() => navigate("/"));
  };

  if (error?.statusCode === 401 || mutation.error?.statusCode === 401) {
    return <Navigate to="/login" />;
  }

  if (error?.statusCode === 404) {
    return <Navigate to="/404" />;
  }

  return <>{advert && <AdvertDetail onDelete={handleDelete} {...advert} />}</>;
}

export default AdvertPage;
