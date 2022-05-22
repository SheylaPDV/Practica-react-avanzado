import React from "react";
import { useDispatch } from "react-redux";

import NewAdvertForm from "./NewAdvertForm";
import { advertCreated } from "../../../store/actions";

function NewAdvertPage() {
  const dispatch = useDispatch();

  const handleSubmit = (newAdvert) => {
    dispatch(advertCreated(newAdvert));
  };

  // if (mutation.error?.statusCode === 401) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <>
      <NewAdvertForm onSubmit={handleSubmit} />
    </>
  );
}

export default NewAdvertPage;
