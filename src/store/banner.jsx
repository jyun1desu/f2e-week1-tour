import { selectorFamily } from "recoil";
import { getActivity } from "api/fetahAPI";

export const bannersState = selectorFamily({
  key: "banner",
  get: (city) => async () => {
    const params = {
      $top: 3,
      $orderby: "StartTime desc",
    };
    const { data } = await getActivity(city, "", params);

    const modifiedData = data.map((d) => {
      return {
        picture: d?.Picture?.PictureUrl1 || d?.Picture?.PictureUrl2,
        name: d?.Name,
        startTime: d?.StartTime,
        id: d?.ID,
        type: d?.type,
        pictureDescription:
          d?.Picture?.PictureDescription1 || d?.Picture?.PictureDescription2,
      };
    });

    return modifiedData;
  },
});
