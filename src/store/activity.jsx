import { selector } from "recoil";
import { getActivity } from "api/fetahAPI";
import { getRandomNumbers } from "util/helper";

export const artActivityListState = selector({
  key: "artActivityList",
  get: async () => {
    const params = {
      $top: 1000,
      $filter: `contains(Class1,'藝文活動') or contains(Class2,'藝文活動') and Picture/PictureUrl1 ne null`,
    };

    const { data } = await getActivity("", "", params);

    const randoms = getRandomNumbers(data.length - 1, 12);

    const modifiedData = data.filter((_, i) => {
      return randoms.includes(i);
    });

    return modifiedData;
  },
});
