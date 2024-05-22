# Holidays Korea

한국의 공휴일 정보를 제공합니다.

[공공데이터포털](https://www.data.go.kr/data/15012690/openapi.do)에서 오픈 API 활용 신청하여 서비스키를 발급 받고. 일반 인증키(Decoding)를 사용하여 이용해주세요.

## Usage

```js
import { fetchHolidays, init } from "holidays-korea";

const serviceKey = "YOUR-SERIVCE-KEY";

init({ serviceKey });

fetchHolidays({ year: 2023, month: 6, length: 12 })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Response

```js
[
  { name: "현충일", date: 20230606 },
  { name: "광복절", date: 20230815 },
  { name: "추석", date: 20230928 },
  { name: "추석", date: 20230929 },
  { name: "추석", date: 20230930 },
  { name: "임시공휴일", date: 20231002 },
  { name: "개천절", date: 20231003 },
  { name: "한글날", date: 20231009 },
  { name: "기독탄신일", date: 20231225 },
  { name: "1월1일", date: 20240101 },
  { name: "설날", date: 20240209 },
  { name: "설날", date: 20240210 },
  { name: "설날", date: 20240211 },
  { name: "대체공휴일(설날)", date: 20240212 },
  { name: "삼일절", date: 20240301 },
  { name: "국회의원선거", date: 20240410 },
  { name: "어린이날", date: 20240505 },
  { name: "대체공휴일(어린이날)", date: 20240506 },
  { name: "부처님오신날", date: 20240515 },
];
```

## Docs

### Request

| 속성   | 설명                                | 타입                   |
| ------ | ----------------------------------- | ---------------------- |
| year   | 조회 시작 년도                      | Number or String(YYYY) |
| month  | 조회 시작 월                        | Number or String (MM)  |
| length | 시작 기준 월로부터 조회할 개월의 수 | Number                 |

### Response

아래 객체를 배열형태로 반환합니다.
| 속성 | 설명 | 타입 |
| ---- | ----------- | ----------------- |
| name | 공휴일 이름 | String |
| date | 날짜 | String (YYYYMMDD) |
