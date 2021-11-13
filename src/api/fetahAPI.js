import API from "./index";
import { getRandomNumbers } from "util/helper";
import { cititesList } from "config/filter";
const defaultParams = {
  $filter: "Picture/PictureUrl1 ne null",
  $orderby: "SrcUpdateTime desc",
  format: "JSON",
};

export const getTDXAPI = async (
  type,
  city,
  keyword,
  params = defaultParams
) => {
  const url = `${type}${city ? `/${city}` : ""}`;

  let sendParams = {
    ...defaultParams,
    ...params,
  };

  if (keyword) {
    sendParams = {
      ...sendParams,
      $filter: `contains(Name,'${keyword}')`,
    };
  }

  const { status, data } = await API.get(url, { params: sendParams });
  const modifiedData = data.map((d) => {
    const cityId = cititesList.find((c) => {
      return c.label === d.City;
    });

    const startTime = d.StartTime ? d.StartTime.split("T")[0] : "";
    const endTime = d.EndTime ? d.EndTime.split("T")[0] : "";

    const duration = startTime
      ? `${startTime}${endTime && startTime !== endTime ? ' ～ ' + endTime : ""}`
      : "";

    return { ...d, type: type, cityId: cityId?.value, duration };
  });

  return { status, data: modifiedData };
};

export const getRandomList = async (type, city) => {
  const { data, status } = await getTDXAPI(type, city, "", { $top: 1000 });
  const randoms = getRandomNumbers(data.length - 1, 12);

  const modifiedData = data.filter((_, i) => {
    return randoms.includes(i);
  });

  return { status, data: modifiedData };
};

export const getCertainSpot = async (type, id) => {
  const params = {
    $filter: `contains(ID,'${id}')`,
  };
  const { data } = await getTDXAPI(type, "", "", params);

  if (!data[0]) {
    return null;
  }

  return data[0];
};

export const getScenicSpot = (city, keyword, params) => {
  return getTDXAPI("ScenicSpot", city, keyword, params);
};

export const getRestaurant = (city, keyword, params) => {
  return getTDXAPI("Restaurant", city, keyword, params);
};

export const getHotel = (city, keyword, params) => {
  return getTDXAPI("Hotel", city, keyword, params);
};

export const getActivity = (city, keyword, params) => {
  return getTDXAPI("Activity", city, keyword, params);
};
