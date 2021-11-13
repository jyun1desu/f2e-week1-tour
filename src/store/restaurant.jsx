import { selector } from "recoil";
import { getRestaurant } from "api/fetahAPI";
import { getRandomNumbers } from "util/helper";

export const recommandRestaurantListState = selector({
  key: "recommandRestaurantList",
  get: async () => {
    const params = {
		$top: 1000,
      $filter: `Picture/PictureUrl1 ne null`,
    };

    const { data } = await getRestaurant("", "", params);

    const randoms = getRandomNumbers(data.length - 1, 12);

    const modifiedData = data.filter((_, i) => {
      return randoms.includes(i);
    });

    return modifiedData;
  },
});
