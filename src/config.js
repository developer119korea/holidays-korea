export const config = {
  serviceKey: "",
};

export const setServiceKey = ({ key }) => {
  config.serviceKey = key;
};

export const OPEN_HOOLIDAY_API_URL =
  "http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo";
