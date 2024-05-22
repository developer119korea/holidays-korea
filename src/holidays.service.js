import axios from "axios";
import { OPEN_HOOLIDAY_API_URL, config } from "./config";

export async function fetchHolidaysByMonth({ year, month }) {
  try {
    if (!config.serviceKey) {
      throw new Error("Service key is not set");
    }

    const { data } = await axios.get(OPEN_HOOLIDAY_API_URL, {
      params: {
        ServiceKey: config.serviceKey,
        solYear: year,
        solMonth: month.padStart(2, "0"),
        numOfRows: 30,
      },
    });

    if (data.response.header.resultCode !== "00") {
      throw new Error(data.response.header.resultMsg);
    }

    const holidays = [];
    const items = data.response.body.items.item || [];

    if (!Array.isArray(items)) {
      holidays.push({
        name: items.dateName,
        date: `${items.locdate}`,
      });
      return holidays;
    }

    for (const item of items) {
      const { locdate, dateName } = item;
      holidays.push({
        name: dateName,
        date: `${items.locdate}`,
      });
    }
    return holidays;
  } catch (error) {
    throw error;
  }
}

export async function fetchHolidays({ year, month, length }) {
  try {
    const holidays = [];
    const count = length || 1;
    for (let i = 0; i < count; i++) {
      const date = new Date(year, month - 1 + i, 1);
      const holiday = await fetchHolidaysByMonth({
        year: `${date.getFullYear()}`,
        month: `${date.getMonth() + 1}`,
      });
      holidays.push(...holiday);
    }

    return holidays;
  } catch (error) {
    throw error;
  }
}
