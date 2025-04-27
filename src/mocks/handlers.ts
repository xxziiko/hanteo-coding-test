import { API_PATH, CURATION_PATH } from '@/shared/constants/paths';
import { http, HttpResponse } from 'msw';
import {
  BANNER_LIST,
  CHARGING_DATA,
  CHART_DATA,
  EVENT_DATA,
  NEWS_DATA,
  STORE_DATA,
  WHOOK_DATA,
} from './index';

const CURATION_HANDLERS = [
  { path: CURATION_PATH.CHART, data: CHART_DATA },
  { path: CURATION_PATH.WHOOK, data: WHOOK_DATA },
  { path: CURATION_PATH.NEWS, data: NEWS_DATA },
  { path: CURATION_PATH.STORE, data: STORE_DATA },
  { path: CURATION_PATH.EVENT, data: EVENT_DATA },
  { path: CURATION_PATH.CHARGING, data: CHARGING_DATA },
] as const;

const LIMIT_COUNT = 30 as const;

export const handlers = [
  ...CURATION_HANDLERS.map(({ path, data }) =>
    http.get(`${API_PATH.CURATIONS}${path}`, ({ request }) => {
      const url = new URL(request.url);
      const page = url.searchParams.get('page') ?? 1;

      const start = (Number(page) - 1) * Number(LIMIT_COUNT);
      const end = start + Number(LIMIT_COUNT);

      return HttpResponse.json(data.slice(start, end));
    }),
  ),

  http.get(API_PATH.BANNERS, () => {
    return HttpResponse.json(BANNER_LIST);
  }),
];
