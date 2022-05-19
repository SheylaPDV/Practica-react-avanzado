import { getAdvert } from "./selectors";

describe("getAdvert", () => {
  it("should return a advert", () => {
    const advertId = "1";
    const adverts = [{ id: advertId }];
    const state = { adverts: { data: [{ id: advertId }] } };
    expect(getAdvert(advertId)(state)).toEqual(adverts[0]);
  });
  it("should not return a advert", () => {
    const advertId = "1";
    const adverts = [];
    const state = { adverts: { data: adverts } };
    expect(getAdvert(advertId)(state)).toBeUndefined();
  });
});
