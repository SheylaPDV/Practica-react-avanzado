import React from "react";
import T from "prop-types";

import { ConfirmationButton } from "../../common";
import placeholder from "../../../assets/images/placeholder.png";
import { advert } from "../propTypes";

function AdvertDetail({ name, sale, price, tags, photo, onDelete }) {
  return (
    <div>
      <p>{name}</p>
      <p>{sale ? "Sell" : "Buy"}</p>
      {/* El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena */}
      <p>{tags.join(", ")}</p>
      <p>{price}</p>
      <img
        // foto o en su defecto, placeholder
        src={photo || placeholder}
        alt={name}
        width="200"
        height="200"
        style={{ objectFit: "contain" }}
      />
      {/* confirmacion para borrar */}
      <ConfirmationButton confirmation="Are you sure?" onConfirm={onDelete}>
        Delete
      </ConfirmationButton>
    </div>
  );
}

AdvertDetail.propTypes = {
  ...advert,
  // tipo de foto string
  photo: T.string,
  // tipo funcion
  onDelete: T.func.isRequired,
};

AdvertDetail.defaultProps = {
  photo: null,
};

export default AdvertDetail;
