import { setServiceKey } from "./config";
import { fetchHolidays } from "./holidays.service";

export function init({ serviceKey }) {
  setServiceKey({ key: serviceKey });
}

export { fetchHolidays };
