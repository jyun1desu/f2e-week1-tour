import axios from "axios";
import jsSHA from "jssha";

const getAuthorizationHeader = () => {
  let AppID = process.env.REACT_APP_PTX_API_ID;
  let AppKey = process.env.REACT_APP_PTX_API_KEY;
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return { Authorization: Authorization, "X-Date": GMTString };
};

const instance = axios.create({
  baseURL: "https://ptx.transportdata.tw/MOTC/v2/Tourism/",
  headers: getAuthorizationHeader(),
  timeout: 1000,
});

instance.interceptors.response.use(
  function (response) {
    const { status, data } = response;
    return { status, data };
  },
  function (error) {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          console.log("你要找的頁面不存在");
          break;
        case 500:
          console.log("程式發生問題");
          break;
        default:
          console.log(error.message);
      }
    }
    if (!window.navigator.onLine) {
      alert("網路出了點問題，請重新連線後重整網頁");
      return;
    }
    return Promise.reject(error);
  }
);

export default instance;
