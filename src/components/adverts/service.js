import client from "../../api/client";
import { withFormData } from "../../utils/converters";

const advertsPath = "/v1/adverts";

export const getTags = () => {
  return client.get(`${advertsPath}/tags`);
};

export const getLatestAdverts = () => {
  return client.get(`${advertsPath}`);
};

export const getAdvert = (advertId) => {
  return client.get(`${advertsPath}/${advertId}`);
};

export const deleteAdvert = (advertId) => {
  return client.delete(`${advertsPath}/${advertId}`);
};

export const createAdvert = withFormData((newAdvert) => {
  return client.post(advertsPath, newAdvert);
});
