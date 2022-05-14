import React from "react";
import T from "prop-types";

import { Link } from "react-router-dom";

function EmptyList({ advertsCount }) {
  return (
    <div>
      <p>No adverts here!</p>
      {advertsCount > 0 ? (
        "Refine your search"
      ) : (
        // si no hay nungun anuncio, aparece un enlace para subir nuevo anuncio
        <Link to="/adverts/new">Create the first advert</Link>
      )}
    </div>
  );
}

EmptyList.propTypes = {
  // tipo numero
  advertsCount: T.number.isRequired,
};

export default EmptyList;
