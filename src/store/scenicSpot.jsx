import { selector } from "recoil";
import { getScenicSpot } from "api/fetahAPI";
import { getRandomNumbers } from "util/helper";

export const natureListState = selector({
  key: "natureList",
  get: async () => {
    const params = {
      $top: 1000,
      $filter: `contains(Class1,'自然風景類') and Picture/PictureUrl1 ne null`,
    };

    const { data } = await getScenicSpot("", "", params);

    const randoms = getRandomNumbers(data.length - 1, 12);

    const modifiedData = data.filter((_, i) => {
      return randoms.includes(i);
    });

    return modifiedData;
  },
});
